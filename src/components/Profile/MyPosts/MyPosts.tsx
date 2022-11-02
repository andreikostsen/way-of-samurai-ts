import Post from "./Posts/Post";
import {PostDataArr} from "../../../redux/state";
import React from 'react'

type PropsType = {

    postData: PostDataArr

}

const MyPosts = (props: PropsType) => {



  return (
      <article>

        {props.postData.map(p=><Post id={p.id} message={p.message}/>)}



      </article>
  )
}

export default MyPosts;
