import { authUserThunkCreator } from '../auth/authThunks';
import { InferActionsType } from '../redux-store';

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

export type ActionTypes = InferActionsType<typeof actions>;

export const actions = {
    setInitializedActionCreator: () => ({ type: SET_INITIALIZED })
};


export default appReducer;