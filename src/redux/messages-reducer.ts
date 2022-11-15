import {ActionType, DialogsTypeArr, MessagesTypeArr} from "./store";

type StateType = {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,
}


export const messagesReducer = (state:StateType, action:ActionType) => {

    switch (action.type) {

        case "ADD-MESSAGE":
            state.messages.push({id: 3, message: state.textFromTextArea})
            state.textFromTextArea = ""
            return state

        case "UPDATE-MESSAGE-TEXT":
            if (action.updatedMessageText) {
                state.textFromTextArea = action.updatedMessageText

            }
            return state

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