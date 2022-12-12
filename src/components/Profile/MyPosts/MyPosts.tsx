import Post from "./Posts/Post";
import {ActionType, PostDataArr} from "../../../redux/store";
import React, {ChangeEvent} from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";




type PropsType = {

    state: {
        postData: PostDataArr,
        textFromTextArea: string,
    },
    onChange: (updatedText:string)=>void,
    addPost: ()=>void,

}

const MyPosts = (props: PropsType) => {


    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let updatedText = e.currentTarget.value
        props.onChange(updatedText)
    }

    const addPost = () => {
        props.addPost()
    }


  return (
      <div>
      <h3>My posts</h3>
      <article>
          <div><textarea onChange={onChangeHandler} value={props.state.textFromTextArea}></textarea></div>
          <div><button onClick={addPost}>Add Post</button></div>
        {props.state.postData.map(p=><Post id={p.id} message={p.message}/>)}

      </article>
      </div>
  )
}

export default MyPosts;
