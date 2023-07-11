import {ActionType, PostDataArr} from "../../../redux/store";
import React from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => {

    return {
        profileState: state.profilePage
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        updateText: (updatedText: string) => {
            dispatch(updateTextActionCreator(updatedText))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }


}

const MyPostsContainer  = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

