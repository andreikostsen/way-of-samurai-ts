 import {messagesReducer} from "./messages-reducer";
import {profileReducer} from "./profile-reducer";

export type DialogsTypeArr = Array<DialogsType>

    type DialogsType = {
    id: number,
    name: string
}

export type MessagesTypeArr = Array<MessagesType>

    type MessagesType = {
    id: number,
    message: string
}

export type PostDataArr = Array<PostDataType>

   export type PostDataType = {
    id: number,
    message: string
}


export type StateType = {
    messagesPage: {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,
    }
    profilePage: {
        postData: PostDataArr,
        textFromTextArea: string
    }
}

export type ActionType={

    type: string,
    updatedText?: string,
    updatedMessageText?:string


}

export type StoreType = {
    _state: StateType,
    _rerenderEntireTree: ()=>void,
    getState:()=>StateType,
    subscribe: (observer:()=>void)=>void,
    dispatch: (action:ActionType)=>void,
}



export let store: StoreType = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: "Andrei"},
                {id: 2, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you"},
            ],
            textFromTextArea: "",
        },
        profilePage: {
            postData: [
                {id: 1, message: "HI"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Thanks"}
            ],
            textFromTextArea: ""
        },
    },
    _rerenderEntireTree() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action: ActionType) {

        profileReducer(this._state.profilePage, action)
        messagesReducer(this._state.messagesPage, action)
        this._rerenderEntireTree()

    }
}


