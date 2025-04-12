import React from "react";
import photo from '../../../assets/people.jpeg'

const User = (props) => {
    let follow = () => {
        props.follow(props.id);
    };

    let unfollow = () => {
        props.unfollow(props.id);
    }

    return (
        <div>
            <span>
                <div>
                    <img src={ props.photo ? props.photo : photo } alt="" />
                </div>
                { props.followed 
                    ? <button onClick={unfollow}>Unfollow</button> 
                    : <button onClick={follow}>Follow</button> }
            </span>
            <span>
                <div>
                    <p>{ props.name }</p>
                    <p>{ props.status }</p>
                </div>
                <div>
                    <p>Penza</p>
                    <p>Country</p>
                </div>
            </span>
        </div>
    )
}

export default User;