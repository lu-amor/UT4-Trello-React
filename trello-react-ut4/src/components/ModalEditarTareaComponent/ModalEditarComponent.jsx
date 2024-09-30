import React, { useState, useEffect } from 'react';
import classes from './ModalEditar.module.css';

const ModalEditarComponent = ({ task, closeModal, updateTask, deleteTask }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [assignedTo, setAssignedTo] = useState(task ? task.assignedTo : 'Persona 1');
    const [deadline, setDeadline] = useState(task ? task.deadline : '');
    const [status, setStatus] = useState(task ? task.status : 'backlog');
    const [priority, setPriority] = useState(task ? task.priority : 'Baja');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setAssignedTo(task.assignedTo);
            setDeadline(task.deadline);
            setStatus(task.status);
            setPriority(task.priority);
        }
    }, [task]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedTask = { ...task, title, description, assignedTo, deadline, status, priority };
        await updateTask(updatedTask);
        closeModal();
    };

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                <div className={`box ${classes['crear-editar']}`}>
                    <p className="subtitle is-4">Editar tarea</p>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Título</label>
                            <div className="control">
                                <input 
                                    id="task-title" 
                                    className="input" 
                                    type="text" 
                                    placeholder="Título" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Descripción</label>
                            <div className="control">
                                <textarea 
                                    id="task-description" 
                                    className="textarea" 
                                    placeholder="Descripción de la tarea" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <label className="label">Asignado a</label>
                            <div className="control">
                                <div className="select">
                                    <select 
                                        id="task-assigned-to" 
                                        value={assignedTo} 
                                        onChange={(e) => setAssignedTo(e.target.value)}
                                    >
                                        <option>Persona 1</option>
                                        <option>Persona 2</option>
                                        <option>Persona 3</option>
                                        <option>Persona 4</option>
                                    </select>
                                </div>
                            </div>
                            <label className="label">Estado</label>
                            <div className="control">
                                <div className="select">
                                    <select 
                                        id="task-status" 
                                        value={status} 
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="backlog">backlog</option>
                                        <option value="to-do">to-do</option>
                                        <option value="in progress">in progress</option>
                                        <option value="blocked">blocked</option>
                                        <option value="done">done</option>
                                    </select>
                                </div>
                            </div>
                            <button 
                                type="button" 
                                className={`button is-danger ${classes['boton-aceptar-cancelar']}`} 
                                onClick={() => {
                                    deleteTask();
                                    closeModal();
                                }}
                                > Eliminar Tarea
                            </button>
                        </div>
                        <div className="field is-grouped">
                            <label className="label">Prioridad</label>
                            <div className="control">
                                <div className="select">
                                    <select 
                                        id="task-priority" 
                                        value={priority} 
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                    </select>
                                </div>
                            </div>
                            <label className="label">Fecha límite</label>
                            <div className="control">
                                <input 
                                    id="deadline" 
                                    className="input" 
                                    type="date" 
                                    placeholder="dd/mm/aaaa" 
                                    value={deadline} 
                                    onChange={(e) => setDeadline(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button type="button" className={`button is-danger ${classes['boton-aceptar-cancelar']}`} onClick={closeModal}>Cancelar</button>
                            </div>
                            <div className="control">
                                <button type="submit" className={`button is-success ${classes['boton-aceptar-cancelar']}`}>Aceptar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditarComponent;