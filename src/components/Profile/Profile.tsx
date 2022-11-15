import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/store";
import {ActionType} from "../../redux/store";


type PropsType = {

  state: {
  postData: PostDataArr,
  textFromTextArea: string,
}
  dispatch: (action:ActionType)=>void,


}

const Profile = (props: PropsType) => {
  return (
      <MyPosts state={props.state} dispatch={props.dispatch}/>
  )
}

export default Profile;


