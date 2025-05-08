import React from "react";
import classes from './Message.module.css';

type MessageType = {
    message: string
};

const Message: React.FC<MessageType> = ({ message }) => {
    return (
        <div className={ classes.message }>
            { message }
        </div>
    )
}

export default Message;