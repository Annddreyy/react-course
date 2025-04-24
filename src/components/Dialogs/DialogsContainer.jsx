import Dialogs from './Dialogs'
import { addNewMessageActionCreator } from "../../redux/messages/messagesReducer";
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
        addNewMessage: (text) => dispatch(addNewMessageActionCreator(text))
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);
