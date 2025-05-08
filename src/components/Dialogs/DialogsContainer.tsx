import Dialogs from './Dialogs.tsx'
import { actions } from "../../redux/messages/messagesReducer.ts";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.tsx';
import { AppStateType } from '../../redux/redux-store.ts';
import { DialogType, MessageType } from '../../types/types.tsx';

type MapStateToPropsType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessage: string,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addNewMessageActionCreator: (message: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { addNewMessageActionCreator: actions.addNewMessageActionCreator }),
    withAuthRedirect
) (Dialogs);
