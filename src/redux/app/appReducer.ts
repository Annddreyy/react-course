import { authUserThunkCreator } from '../auth/authThunks';

const SET_INITIALIZED = 'social-network/app/SET_INITIALIZED';


let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

type InitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitializedActionCreator = (): InitializedActionType => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authUserThunkCreator());

    Promise.all([promise])
    .then(
        () => dispatch(setInitializedActionCreator())
    );
}

export default appReducer;