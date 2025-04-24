import { authUserThunkCreator } from './../auth/authThunks';

const SET_INITIALIZED = 'social-network/app/SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            debugger;
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


export const setInitializedActionCreator = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authUserThunkCreator());
    Promise.all([promise])
    .then(
        () => dispatch(setInitializedActionCreator())
    );
}

export default appReducer;