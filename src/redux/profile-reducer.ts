import {ActionType, PostDataArr, PostDataType} from "./store";

type StateType = {

    postData: PostDataArr,
    textFromTextArea: string
}

export const profileReducer = (state: StateType, action:ActionType) => {

switch (action.type) {

    case "ADD-POST":
            let post = state.textFromTextArea;
            let newPost: PostDataType = {id: 5, message: post}
            state.postData.push(newPost)
            state.textFromTextArea = ""
            return state;


    case "UPDATE-TEXT":
            if(action.updatedText) {
                state.textFromTextArea = action.updatedText
            }

        return state;

    default:
        return state;
}


}

export const updateTextActionCreator = (updatedText:string)=> (
    {type:"UPDATE-TEXT", updatedText: updatedText}
)

export const addPostActionCreator = () => ({type:"ADD-POST"})
