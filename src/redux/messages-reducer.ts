import {ActionType, DialogsTypeArr, MessagesTypeArr} from "./store";

type StateType = {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,
}


const initialState = {
    dialogs: [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
    ],
    textFromTextArea: "",
}

export const messagesReducer = (state:StateType = initialState, action:ActionType) => {

    switch (action.type) {

        case "ADD-MESSAGE":
            let newState={...state}
            newState.messages.push({id: 3, message: newState.textFromTextArea})
            newState.textFromTextArea = ""
            return newState

        case "UPDATE-MESSAGE-TEXT":
            let newState1={...state}
            if (action.updatedMessageText) {
                newState1.textFromTextArea = action.updatedMessageText

            }
            return newState1

        default:
            return state

    }
}



export const updatedMessageTextActionCreator = (updatedMessageText: string) => (
    {
        type: "UPDATE-MESSAGE-TEXT",
        updatedMessageText: updatedMessageText
    }
)

export const addMessageActionCreator = () => ({type:"ADD-MESSAGE"})