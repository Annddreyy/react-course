import { Message } from './Message/Message';
import classes from './Messages.module.css';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';
import { useEffect, useRef, useState } from 'react';

export const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);

    const [isAutoScroll, setIsAutoScroll] = useState(false);

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages]);

    const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const elem = event.currentTarget;
        if (Math.abs((elem.scrollHeight - elem.scrollTop) - elem.clientHeight) < 50) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    }

    return (
        <div className={ classes.messages } onScroll={ scrollHandler }>
            { messages.map(message => <Message message={ message } key={ message.id } />)}
            <div ref={ messagesAnchorRef }></div>
        </div>
    )
};
