
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
        postData: PostDataArr,
        textFromTextArea: string
    }
}

export type ActionType={

    type: string,
    updatedText?: string


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

        if (action.type === "ADD-POST") {
            let post = this._state.profilePage.textFromTextArea;
            let newPost: PostDataType = {id: 5, message: post}
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.textFromTextArea = ""
            this._rerenderEntireTree()
        } else if (action.type === "UPDATE-TEXT", action.updatedText) {
            this._state.profilePage.textFromTextArea = action.updatedText
            this._rerenderEntireTree()
        }

    }
}

export const updateTextActionCreator = (updatedText:string)=> (
    {type:"UPDATE-TEXT", updatedText: updatedText}
)

export const addPostActionCreator = () => ({type:"ADD-POST"})
