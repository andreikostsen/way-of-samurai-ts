import React from 'react'
import {PostDataArr} from "../../redux/store";
import {ActionType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";


type PropsType = {
//
//   state: {
//   postData: PostDataArr,
//   textFromTextArea: string,
// }
//   dispatch: (action:ActionType)=>void,


}

const Profile = (props:PropsType) => {
  return (
      <MyPostsContainer/>
  )
}

export default Profile;


