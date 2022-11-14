import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/state";
import {ActionType, StateType} from "../../redux/store";


type PropsType = {

  state: StateType,
  dispatch: (action:ActionType)=>void,


}

const Profile = (props: PropsType) => {
  return (
      <MyPosts state={props.state} dispatch={props.dispatch}/>
  )
}

export default Profile;


