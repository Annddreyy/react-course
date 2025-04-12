import React from "react";

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
                    <img src={props.photoURL} alt="" />
                </div>
                { props.followed 
                    ? <button onClick={unfollow}>Unfollow</button> 
                    : <button onClick={follow}>Follow</button> }
            </span>
            <span>
                <div>
                    <p>{ props.fullName }</p>
                    <p>{ props.status }</p>
                </div>
                <div>
                    <p>{ props.city }</p>
                    <p>{ props.country }</p>
                </div>
            </span>
        </div>
    )
}

export default User;