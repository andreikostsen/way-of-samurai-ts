import Post from "./Posts/Post";
import {ActionType, PostDataArr} from "../../../redux/store";
import React, {ChangeEvent} from 'react'
import {addPostActionCreator, ProfileStateType, updateTextActionCreator} from "../../../redux/profile-reducer";
import {AppRootStateType} from "../../../redux/redux-store";




type PropsType = {
    profileState: ProfileStateType,
    updateText: (updatedText:string)=>void,
    addPost: ()=>void,


}

const MyPosts = (props: PropsType) => {


    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let updatedText = e.currentTarget.value
        props.updateText(updatedText)
    }

    const addPost = () => {
        props.addPost()
    }


  return (
      <div>
      <h3>My posts</h3>
      <article>
          <div><textarea onChange={onChangeHandler} value={props.profileState.textFromTextArea}></textarea></div>
          <div><button onClick={addPost}>Add Post</button></div>
        {props.profileState.postData.map(p=><Post id={p.id} message={p.message}/>)}

      </article>
      </div>
  )
}

export default MyPosts;
