import Dialogs from './Dialogs'
import { actions } from "../../redux/messages/messagesReducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';
import { DialogType, MessageType } from '../../types/types';

type MapStateToPropsType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessage: string,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addNewMessage: (message: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { addNewMessage: actions.addNewMessageActionCreator }),
    withAuthRedirect
) (Dialogs);
