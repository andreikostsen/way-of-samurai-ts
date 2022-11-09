
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
    state: StateType,
    AddPost: ()=>void,
    UpdateText: (updatedText:string)=>void,
    rerenderEntireTree: ()=>void,
    subscribe: (observer:()=>void)=>void
}



export let store:StoreType = {
    state: {
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
    rerenderEntireTree() { },
    AddPost() {
        let post = this.state.profilePage.textFromTextArea;
        let newPost: PostDataType = {id: 5, message: post}
        this.state.profilePage.postData.push(newPost)
        this.state.profilePage.textFromTextArea = ""
        this.rerenderEntireTree()
    },
    UpdateText(updatedText: string) {
        this.state.profilePage.textFromTextArea = updatedText
        this.rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    }
}