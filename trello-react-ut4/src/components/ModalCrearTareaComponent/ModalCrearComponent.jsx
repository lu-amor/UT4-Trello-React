import React from "react";
import classes from './ModalCrear.module.css';

const ModalCrearComponent = () => {
    return (
        <div className="overlay">
            <article id="modal-crear-tarea" className="message is-warning crear-editar">
                <div className="message-header header-mensaje">
                    <p className="subtitle is-4 crear-editar-titulo">Crear tarea</p>
                </div>
                <div className="message-body">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="field">
                                <label className="label">Título</label>
                                <div className="control">
                                    <input id="task-title" className="input" type="text" placeholder="Título"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Descripción</label>
                                <div className="control">
                                    <textarea id="task-description" className="textarea" placeholder="Descripción de la tarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="column is-quarter columna2">
                            <div className="field">
                                <label className="label">Estado</label>
                                <div className="control">
                                    <div className="select">
                                        <select id="task-status">
                                            <option value="backlog">Backlog</option>
                                            <option value="to-do">To-Do</option>
                                            <option value="in progress">In progress</option>
                                            <option value="blocked">Blocked</option>
                                            <option value="done">Done</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
    
                            <div className="field">
                                <label className="label">Prioridad</label>
                                <div className="control">
                                    <div className="select">
                                        <select id="task-priority">
                                            <option value="Alta">Alta</option>
                                            <option value="Media">Media</option>
                                            <option value="Baja">Baja</option>
                                            <option value="Arreglar">Arreglar</option>
                                            <option value="Extras">Extras</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-quarter columna3">
                            <div className="field">
                                <label className="label">Asignado</label>
                                <div className="control">
                                    <div className="select">
                                        <select id="task-assigned">
                                            <option>Persona 1</option>
                                            <option>Persona 2</option>
                                            <option>Persona 3</option>
                                            <option>Persona 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Fecha límite</label>
                                <div className="control">
                                    <input id="deadline" className="input" type="date" placeholder="dd/mm/aaaa"/>
                                </div>
                            </div>
                        </div>
                        <div className="is-flex is-justify-content-flex-end botones-espaciados">
                            <button id="cancelar" className="button is-danger boton-aceptar-cancelar">Cancelar</button>
                            <button id="aceptar" className="button is-success boton-aceptar-cancelar">Aceptar</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ModalCrearComponent;