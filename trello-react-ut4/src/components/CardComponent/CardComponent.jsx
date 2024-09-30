import React from 'react';
import TagComponent from '../Tags/TagComponent';
import classes from './Card.module.css';

const CardComponent = ({ taskTitle, taskPriority, taskDueDate, onClick }) => {
    return (
        <div className={`${classes['tarjeta-tarea']} card`} onClick={onClick} style={{ cursor: 'pointer' }}>
            <TagComponent priority={taskPriority} />
            <p className="title is-4">{taskTitle}</p>
            <p className="subtitle is-6">{taskDueDate}</p>
        </div>
    );
};

export default CardComponent;
