import {ActionType, PostDataArr} from "../../../redux/store";
import React from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




type PropsType = {

    state: {
        postData: PostDataArr,
        textFromTextArea: string,
    },
    dispatch: (action:ActionType)=>void,


}

const MyPostsContainer = (props: PropsType) => {


    const updateText = (updatedText:string)=> {
        props.dispatch(updateTextActionCreator(updatedText))
    }

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
     <MyPosts textFromTextArea={props.state.textFromTextArea} postData={props.state.postData} onChange={updateText} addPost={addPost}/>
    )
}

export default MyPostsContainer;
