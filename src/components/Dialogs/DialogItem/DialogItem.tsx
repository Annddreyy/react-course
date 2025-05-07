import React from "react";
import {NavLink} from 'react-router-dom';
import classes from './DialogItem.module.css';
import { DialogType } from "../../../types/types";

const DialogItem = ({ id, name }: DialogType) => {
    const path = '/dialogs/' + id;
    return (
        <div className={classes.dialog}>
            <img src=".\src\assets\people.jpeg" alt="" />
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;