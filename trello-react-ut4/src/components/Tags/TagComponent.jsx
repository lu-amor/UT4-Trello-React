import React from "react";
import classes from './Tags.module.css';

const TagComponent = ({ priority }) => {
    let tagClass = `${classes['tag-custom']} tag`;

    switch (priority) {
        case 'Alta':
            tagClass += ' is-danger';
            break;
        case 'Media':
            tagClass += ' is-warning';
            break;
        case 'Baja':
            tagClass += ' is-success';
            break;
        default:
            tagClass += ' is-info';
            break;
    }

    return (
        <span className={tagClass}></span>
    );
};

export default TagComponent;