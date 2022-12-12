
import {ActionType, PostDataArr} from "../../../redux/store";
import React from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";




type PropsType = {

    state: {
        postData: PostDataArr,
        textFromTextArea: string,
    },
    dispatch: (action:ActionType)=>void,




}

const MyPostsContainer = (props: PropsType) => {


    const onChangeHandler = (updatedText:string)=> {
        props.dispatch(updateTextActionCreator(updatedText))
    }

    const addPost = () => {
      props.dispatch(addPostActionCreator())

    }


  return (
      <MyPosts state={props.state} onChange={onChangeHandler} addPost={addPost}/>
  )
}

export default MyPostsContainer;
