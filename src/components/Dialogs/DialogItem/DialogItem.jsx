import React from "react";
import {NavLink} from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;