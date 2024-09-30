import React, {useState, useEffect} from 'react';
import ColumnComponent from './components/ColumnComponent/ColumnComponent';
import CardComponent from './components/CardComponent/CardComponent';
import ModalCrearComponent from './components/ModalCrearTareaComponent/ModalCrearComponent';
import ModalEditarComponent from './components/ModalEditarTareaComponent/ModalEditarComponent';
import './App.css';
const url = 'http://localhost:3000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  async function fetchTasks() {
    try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}

  useEffect(() => {
    fetchTasks().then((incommingTask) => {
      setTasks(incommingTask);
    });
  }, []);

  const addTask = async (newTask) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask = await response.json();
        setTasks([...tasks, savedTask]);
      } else {
        console.log('Error saving task: ', response.statusText);
      }
    } catch (error) {
      console.log('Error saving task: ', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`${url}/${updatedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        const updatedTasks = tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
      } else {
        console.log('Error updating task: ', response.statusText);
      }
    } catch (error) {
      console.log('Error updating task: ', error);
    }
  };

const deleteTask = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (response.ok) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        closeModal();
        } else {
          console.log("Error deleting task: ", response.statusText);
          closeModal();
        }
    }
    catch (error) {
      console.log("Error deleting task: ", error);
      closeModal();
    }
  closeModal();
};

  const getCardsByStatus = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <CardComponent
          key={task.id}
          taskTitle={task.title}
          taskDescription={task.description}
          taskPriority={task.priority}
          taskAssignedTo={task.assignedTo}
          taskStartDate={task.startDate}
          taskDueDate={task.dueDate}
          taskStatus={task.status}
          onClick={() => {
            setSelectedTask(task);
            setIsEditModalOpen(true);
          }}
        />
      ));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p className="title is-1 titulo">tasks</p>
      <div className="button-container">
        <button className={`button customButton`} onClick={() => openModal()}>New task</button>
      </div>
      <div className="columns">
        <div className="column">
          <ColumnComponent title='Backlog'>
            {getCardsByStatus('backlog')}
          </ColumnComponent>
        </div>
        <div className="column">
          <ColumnComponent title='To-Do'>
            {getCardsByStatus('to do')}
          </ColumnComponent>
        </div>
        <div className="column">
          <ColumnComponent title='In Progress'>
            {getCardsByStatus('in progress')}
          </ColumnComponent>
        </div>
        <div className="column">
          <ColumnComponent title='Blocked'>
            {getCardsByStatus('blocked')}
          </ColumnComponent>
        </div>
        <div className="column">
          <ColumnComponent title='Done'>
            {getCardsByStatus('done')}
          </ColumnComponent>
        </div>
      </div>

      {isModalOpen && (
        <ModalCrearComponent closeModal={closeModal} addTask={addTask} />
      )}
      {isEditModalOpen && (
        <ModalEditarComponent
          closeModal={() => setIsEditModalOpen(false)}
          updateTask={updateTask}
          task={selectedTask}
          deleteTask={() => deleteTask(selectedTask.id)}
        />
      )}
    </>
  );
}

export default App;
