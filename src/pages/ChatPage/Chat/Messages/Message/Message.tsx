import { ChatMessageAPIType } from '../../../../../api/chatAPI';
import classes from './Message.module.css';
import React from 'react';

export const Message: React.FC<{ message: ChatMessageAPIType} > = React.memo(({ message }) => {
    return (
        <div className={ classes.item }>
            <div className={ classes.author }>
                <img src={ message.photo } className={ classes.img } alt=""/>
                <b>{ message.userName }</b>
            </div>
            <p>{ message.message }</p>
        </div>
    )
})