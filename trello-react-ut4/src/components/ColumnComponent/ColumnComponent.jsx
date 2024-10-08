import React from "react";
import classes from './Column.module.css';

const ColumnComponent = ({title, children}) => {
    return (
        <div className={`${classes.column} ${classes.columna}`}>
            <p className={`title is-3 ${classes['custom-title']} ${classes['title-color']}`}>{title}</p>
            {children}
        </div>
    );
};

export default ColumnComponent;