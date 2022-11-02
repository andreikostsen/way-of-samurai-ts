
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

    type PostDataType = {
    id: number,
    message: string
}


export type StateType = {
    messagesPage: {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
    }
    profilePage: {
        postData: PostDataArr
    }
}


export const state: StateType = {

    messagesPage: {

        dialogs: [
            {id: 1, name: "Andrei"},
            {id: 2, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you"},
        ],

    },

    profilePage: {

        postData: [
            {id: 1, message: "HI"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Thanks"}

        ]

    }


}