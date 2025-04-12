import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

// Этот объект надо воспринимать не как связку reducer, а state (3 ветки - 3 reducer)
// То есть redux автоматически создает state с этими 3 свойствами, так как reducer возвращает state
const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(rootReducer);

export default store;