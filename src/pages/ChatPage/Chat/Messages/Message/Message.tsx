import classes from './Message.module.css';
import img from './../../../../../assets/people.jpeg';
import { ChatMessageType } from '../../Chat';

export const Message: React.FC<{ message: ChatMessageType} > = ({ message }) => {
    return (
        <div className={ classes.item }>
            <div className={ classes.author }>
                <img src={ message.photo } className={ classes.img } alt=""/>
                <b>{ message.userName }</b>
            </div>
            <p>{ message.message }</p>
        </div>
    )
}