import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';

import profileReducer from './profile/profileReducer';
import messagesReducer from './messages/messagesReducer';
import usersReducer from './users/usersReducer';
import authReducer from './auth/authReducer';
import appReducer from './app/appReducer';
import { reducer as formReducer } from 'redux-form';

import { thunk as thunkMiddleware } from 'redux-thunk';

// Этот объект надо воспринимать не как связку reducer, а state (3 ветки - 3 reducer)
// То есть redux автоматически создает state с этими 3 свойствами, так как reducer возвращает state
const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;