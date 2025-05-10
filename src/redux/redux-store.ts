import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose, Action } from 'redux';

import profileReducer from './profile/profileReducer';
import messagesReducer from './messages/messagesReducer';
import usersReducer from './users/usersReducer';
import authReducer from './auth/authReducer';
import appReducer from './app/appReducer';
import { reducer as formReducer } from 'redux-form';

import { ThunkAction, ThunkDispatch, thunk as thunkMiddleware } from 'redux-thunk';
import chatReducer from './chat/chatReducer';

// Этот объект надо воспринимать не как связку reducer, а state (3 ветки - 3 reducer)
// То есть redux автоматически создает state с этими 3 свойствами, так как reducer возвращает state
const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
});

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateTypr
export type AppStateType = ReturnType<RootReducerType>;


type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>;
export type AppDispatch = ThunkDispatch<AppStateType, unknown, Action>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;