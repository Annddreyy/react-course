import React from "react";
import classes from './Message.module.css';

type MessageType = {
    message: string
};

const Message = ({ message }: MessageType) => {
    return (
        <div className={ classes.message }>
            { message }
        </div>
    )
}

export default Message;