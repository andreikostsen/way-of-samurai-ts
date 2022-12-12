import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";

let reducers = combineReducers(
    {
        messagesReducer,
        profileReducer,
    }
)

let store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>


export default store