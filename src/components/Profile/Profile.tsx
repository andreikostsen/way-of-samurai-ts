import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import {PostDataArr} from "../../redux/state";

type PropsType = {

  state: {
    postData: PostDataArr,
    textFromTextArea: string
  };
  addPost: () => void;
  updateText: (updatedText: string) => void;


}

const Profile = (props: PropsType) => {
  return (
      <MyPosts profilePage={props.state} addPost={props.addPost} updateText={props.updateText}/>
  )
}

export default Profile;


