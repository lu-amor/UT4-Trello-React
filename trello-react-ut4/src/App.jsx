import React, {useState, useEffect} from 'react';
import ColumnComponent from './components/ColumnComponent/ColumnComponent';
import CardComponent from './components/CardComponent/CardComponent';
import ModalCrearComponent from './components/ModalCrearTareaComponent/ModalCrearComponent';
import './App.css';
const url = 'http://localhost:3000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
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
        />
      ));
  };

  const openModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const modal = document.getElementById("modal-crear-tarea");
    const overlay = document.querySelector(".overlay");
    modal.style.display = "flex";
    overlay.style.display = "block";
}

  return (
    <>
      <p className="title is-1 titulo">tasks</p>
      <button className="button is-light" onClick={() => onClickHandler("A")}>New task</button>
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
    </>
  );
}

export default App;
