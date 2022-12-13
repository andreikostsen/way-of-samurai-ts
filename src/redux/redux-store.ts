import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import { configureStore } from '@reduxjs/toolkit'
//
// let reducers = combineReducers(
//     {
//         messagesPage: messagesReducer,
//         profilePage:profileReducer,
//     }
// )

let store = configureStore({

    reducer: {
        messagesPage: messagesReducer,
        profilePage:profileReducer,

    }
}


)

// export type AppRootStateType = ReturnType<typeof reducers>
export type AppRootStateType = ReturnType<typeof store.getState>


export default store