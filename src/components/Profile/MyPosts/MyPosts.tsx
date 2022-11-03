import Post from "./Posts/Post";
import {PostDataArr} from "../../../redux/state";
import React, {ChangeEvent, useState} from 'react'

type PropsType = {
    postData: PostDataArr
    addPost: (post:string)=>void;
}

const MyPosts = (props: PropsType) => {

    const [post, setPost] = useState<string>("")
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=> {setPost(e.currentTarget.value)}

    const addPost = () => {

        props.addPost(post)
        console.log(post)

    }


  return (
      <div>
      <h3>My posts</h3>
      <article>

          <div><textarea onChange={onChangeHandler}></textarea></div>
          <div><button onClick={addPost}>Add Post</button></div>
        {props.postData.map(p=><Post id={p.id} message={p.message}/>)}

      </article>
      </div>
  )
}

export default MyPosts;
