
import {ActionType, PostDataArr} from "../../../redux/store";
import React from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";




type PropsType = {

    // state: {
    //     postData: PostDataArr,
    //     textFromTextArea: string,
    // },
    // dispatch: (action:ActionType)=>void,




}

const MyPostsContainer = (props: PropsType) => {




  return (
      <StoreContext.Consumer>
          {
              (store) => {

                  const onChangeHandler = (updatedText:string)=> {
                      store.dispatch(updateTextActionCreator(updatedText))
                  }

                  const addPost = () => {
                      store.dispatch(addPostActionCreator())

                  }
                  return  <MyPosts state={store.getState()}
                                   onChange={onChangeHandler}
                                   addPost={addPost}/>
              }




          }

      </StoreContext.Consumer>

  )
}

export default MyPostsContainer;
