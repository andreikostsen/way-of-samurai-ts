import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../index";

type PropsType = {

  postData: PostDataArr

}

const Profile = (props: PropsType) => {
  return (
    <MyPosts postData={props.postData}/>
  )
}

export default Profile;
