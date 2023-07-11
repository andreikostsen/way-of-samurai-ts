import {ActionType, PostDataArr, PostDataType} from "./store";

export type ProfileStateType = {

    postData: PostDataArr,
    textFromTextArea: string
}

const initialState = {
    postData: [
        {id: 1, message: "HI"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Thanks"}
    ],
    textFromTextArea: ""
}


export const profileReducer = (state: ProfileStateType = initialState, action:ActionType) => {

switch (action.type) {

    case "ADD-POST":
        let newState={...state}
        newState.postData = [...state.postData]

            let post = newState.textFromTextArea;
            let newPost: PostDataType = {id: 5, message: post}
        newState.postData.push(newPost)
        newState.textFromTextArea = ""
            return newState;


    case "UPDATE-TEXT":
        let newState1={...state}
            if(action.updatedText) {
                newState1.textFromTextArea = action.updatedText
            }

        return newState1;

    default:
        return state;
}


}

export const updateTextActionCreator = (updatedText:string)=> (
    {type:"UPDATE-TEXT", updatedText: updatedText}
)

export const addPostActionCreator = () => ({type:"ADD-POST"})
