import { Message } from './Message/Message';
import classes from './Messages.module.css';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';

export const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div className={ classes.messages }>
            { messages.map(message => <Message message={ message }/>)}
        </div>
    )
};
