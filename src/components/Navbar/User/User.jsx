import React from "react";
import { NavLink } from "react-router-dom";
import classes from './User.module.css';

const User = (props) => {
    return (
        <div className={classes.user}>
            <NavLink to={ "/users/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default User;