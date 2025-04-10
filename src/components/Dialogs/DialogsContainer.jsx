import Dialogs from "./Dialogs"
import { addNewMessageActionCreator, updateMessageActionCreator } from "../../redux/messagesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            let action = addNewMessageActionCreator();
            dispatch(action);
        },
        updateMessage: (text) => {
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;