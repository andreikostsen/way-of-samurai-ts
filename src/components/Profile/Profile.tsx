import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/state";

type PropsType = {

  state: {
         postData: PostDataArr
  }

}

const Profile = (props: PropsType) => {
  return (
    <MyPosts postData={props.state.postData}/>
  )
}

export default Profile;


