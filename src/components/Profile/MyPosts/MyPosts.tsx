import Post from "./Posts/Post";
import {PostDataArr} from "../../../redux/state";
import React, {ChangeEvent, useState} from 'react'

type PropsType = {
    profilePage: {
        postData: PostDataArr,
        textFromTextArea: string
    }

    addPost: ()=>void;
    updateText: (updatedText: string) =>void;
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

          <div><textarea onChange={onChangeHandler} value={props.profilePage.textFromTextArea}></textarea></div>
          <div><button onClick={addPost}>Add Post</button></div>
        {props.profilePage.postData.map(p=><Post id={p.id} message={p.message}/>)}

      </article>
      </div>
  )
}

export default MyPosts;
