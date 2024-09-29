import React from "react";
import classes from './Tags.module.css';

const TagComponent = ({priority}) => {
    if (priority === 'Alta') {
        return (
            <span className={`${classes.tag} tag is-danger`}></span>
        );
    }
    else if (priority === 'Media') {
        return (
            <span className={`${classes.tag} tag is-warning`}></span>
        );
    }
    else if (priority === 'Baja') {
        return (
            <span className={`${classes.tag} tag is-success`}></span>
        );
    }
    else {
        return (
            <span className={`${classes.tag} tag is-info`}></span>
        );
    }
};

export default TagComponent;