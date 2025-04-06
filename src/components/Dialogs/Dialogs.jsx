import React from "react";
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    console.log( classes );
    return (
        <div className={classes.dialogs}>
            <div className={classes['dialog-items']}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Katya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Ivan</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>Lorem ipsum dolor sit.</div>
                <div className={classes.message}>Lorem, ipsum dolor.</div>
                <div className={classes.message}>Lorem, ipsum.</div>
            </div>
        </div>
    )
}

export default Dialogs;