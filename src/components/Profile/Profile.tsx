import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/state";

type PropsType = {

  state: {postData: PostDataArr};
    addPost: (post:string)=>void;



}

const Profile = (props: PropsType) => {
  return (
    <MyPosts postData={props.state.postData} addPost={props.addPost}/>
  )
}

export default Profile;


