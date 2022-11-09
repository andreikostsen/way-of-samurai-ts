import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/state";
import {StateType} from "../../redux/store";

// type PropsType = {
//
//   state: {
//     postData: PostDataArr,
//     textFromTextArea: string
//   };
//   addPost: () => void;
//   updateText: (updatedText: string) => void;
//
//
// }

type PropsType = {

  state: StateType,
  AddPost: ()=>void,
  UpdateText: (updatedText:string)=>void,


}

const Profile = (props: PropsType) => {
  return (
      <MyPosts state={props.state} AddPost={props.AddPost} UpdateText={props.UpdateText}/>
  )
}

export default Profile;


