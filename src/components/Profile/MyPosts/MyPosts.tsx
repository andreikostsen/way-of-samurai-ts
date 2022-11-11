import Post from "./Posts/Post";
import {PostDataArr} from "../../../redux/state";
import React, {ChangeEvent, useState} from 'react'
import {ActionType, StateType} from "../../../redux/store";

// type PropsType = {
//     profilePage: {
//         postData: PostDataArr,
//         textFromTextArea: string
//     }
//
//     addPost: ()=>void;
//     updateText: (updatedText: string) =>void;
// }
type PropsType = {

    state: StateType,
    dispatch: (action:ActionType)=>void,


}
const MyPosts = (props: PropsType) => {


    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {

        let updatedText = e.currentTarget.value

        props.dispatch({type:"UPDATE-TEXT", updatedText: updatedText})


    }

    const addPost = () => {
      props.dispatch({type:"ADD-POST"})


    }


  return (
      <div>
      <h3>My posts</h3>
      <article>

          <div><textarea onChange={onChangeHandler} value={props.state.profilePage.textFromTextArea}></textarea></div>
          <div><button onClick={addPost}>Add Post</button></div>
        {props.state.profilePage.postData.map(p=><Post id={p.id} message={p.message}/>)}

      </article>
      </div>
  )
}

export default MyPosts;
