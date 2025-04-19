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
        addNewMessage: () => dispatch(addNewMessageActionCreator()),
        updateMessage: (text) => dispatch(updateMessageActionCreator(text))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);
