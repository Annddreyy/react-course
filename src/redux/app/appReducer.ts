import { InferActionsType } from '../redux-store';

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState;
export type ActionTypes = InferActionsType<typeof actions>;

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case 'social-network/app/SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const actions = {
    setInitializedActionCreator: () => ({ type: 'social-network/app/SET_INITIALIZED' })
};

export default appReducer;