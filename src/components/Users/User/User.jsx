import React from "react";
import photo from '../../../assets/people.jpeg';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => {
    let follow = () => {
        props.follow(props.id);
    };

    let unfollow = () => {
        props.unfollow(props.id);
    }

    return (
        <div className={classes.user}>
            <div>
                <div>
                    <NavLink to={"/profile/" + props.id}>
                        <img src={ props.photo ? props.photo : photo } alt="" />
                    </NavLink>
                </div>
                { props.followed 
                    ? <button onClick={unfollow}>Unfollow</button> 
                    : <button onClick={follow}>Follow</button> }
            </div>
            <div>
                <div>
                    <p>{ props.name }</p>
                    <p>{ props.status }</p>
                </div>
                <div>
                    <p>Penza</p>
                    <p>Country</p>
                </div>
            </div>
        </div>
    )
}

export default User;