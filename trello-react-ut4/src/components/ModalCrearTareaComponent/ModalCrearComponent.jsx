import React, { useState } from 'react';
import classes from './ModalCrear.module.css';

const ModalCrearComponent = ({ closeModal, addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('Persona 1');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState('backlog');
    const [priority, setPriority] = useState('Baja');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, assignedTo, deadline, status });
        closeModal();
    };

    return (
        <div className={`modal is-active`}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className={`modal-content`}>
                <div className={`box ${classes['crear-editar']}`}>
                    <p className="subtitle is-4">Crear tarea</p>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Título</label>
                            <div className="control">
                                <input id="task-title" className="input" type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Descripción</label>
                            <div className="control">
                                <textarea id="task-description" className="textarea" placeholder="Descripción de la tarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <label className="label">Asignado a</label>
                            <div className="control">
                                <div className="select">
                                    <select id="task-assigned-to" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
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
                                    <select id="task-status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option>backlog</option>
                                        <option>to-do</option>
                                        <option>in progress</option>
                                        <option>blocked</option>
                                        <option>done</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field is-grouped">
                        <label className="label">Prioridad</label>
                            <div className="control">
                                <div className="select">
                                    <select id="task-priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                                        <option>Alta</option>
                                        <option>Media</option>
                                        <option>Baja</option>
                                    </select>
                                </div>
                            </div>
                            <label className="label">Fecha límite</label>
                            <div className="control">
                                <input id="deadline" className="input" type="date" placeholder="dd/mm/aaaa" value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
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

export default ModalCrearComponent;