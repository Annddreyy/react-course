import { actions, ActionTypes } from "./appReducer";
import { authUserThunkCreator } from "../auth/authThunks";
import { BaseThunkType } from "../redux-store";

export const initializeApp = (): BaseThunkType<ActionTypes> => async(dispatch) => {
    let promise = dispatch(authUserThunkCreator());
    Promise.all([promise])
    .then(
        () => dispatch(actions.setInitializedActionCreator())
    );
};
