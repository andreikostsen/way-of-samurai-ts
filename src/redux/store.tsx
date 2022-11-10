
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

export type StoreType = {
    _state: StateType,
    _rerenderEntireTree: ()=>void,
    getState:()=>StateType,
    AddPost: ()=>void,
    UpdateText: (updatedText:string)=>void,

    subscribe: (observer:()=>void)=>void
}



export let store:StoreType = {
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
    _rerenderEntireTree() { },
    getState(){
        return this._state
    },

    AddPost() {
        let post = this._state.profilePage.textFromTextArea;
        let newPost: PostDataType = {id: 5, message: post}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.textFromTextArea = ""
        this._rerenderEntireTree()
    },
    UpdateText(updatedText: string) {
        this._state.profilePage.textFromTextArea = updatedText
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}