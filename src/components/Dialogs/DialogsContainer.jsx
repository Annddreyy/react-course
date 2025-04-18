import Dialogs from './Dialogs'
import { addNewMessageActionCreator, updateMessageActionCreator } from "../../redux/messagesReducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);
