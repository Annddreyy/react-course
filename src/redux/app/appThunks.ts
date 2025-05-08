import { ThunkAction } from "redux-thunk";
import { actions, ActionTypes } from "./appReducer";
import { AppStateType } from "../redux-store";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(authUserThunkCreator());
    Promise.all([promise])
    .then(
        () => dispatch(actions.setInitializedActionCreator())
    );
}