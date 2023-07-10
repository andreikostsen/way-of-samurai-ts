import React from 'react'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionType, DialogsTypeArr, MessagesTypeArr, PostDataArr} from "../../redux/store";


type PropsType = {

  state: {
    postData: PostDataArr,
    textFromTextArea: string

  },

  dispatch: (action:ActionType)=>void,

}


const Profile = (props:PropsType) => {




  return (
      <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
  )
}

export default Profile;


