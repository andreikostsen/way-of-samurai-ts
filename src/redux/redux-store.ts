import {combineReducers, legacy_createStore as createStore} from "redux";
import {messagesReducer} from "./messages-reducer";
import {profileReducer} from "./profile-reducer";


const rootReducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer
}
)

export const store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store

