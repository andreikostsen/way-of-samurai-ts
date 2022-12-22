
import React from 'react'
import {addPostActionCreator, updateTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

//
//
// const MyPostsContainer = () => {
//   return (
//       <StoreContext.Consumer>
//           {
//               (store) => {
//                   const onChangeHandler = (updatedText:string)=> {
//                       store.dispatch(updateTextActionCreator(updatedText))
//                   }
//                   const addPost = () => {
//                       store.dispatch(addPostActionCreator())
//                   }
//                   return  <MyPosts state={store.getState()}
//                                    onChange={onChangeHandler}
//                                    addPost={addPost}/>
//               }
//           }
//       </StoreContext.Consumer>
//
//   )
// }

let mapStateToProps = (state:AppRootStateType) => {

    return {
        state: state
    }

}

let mapDispatchToProps = (dispatch:any) => {

    return {

        onChange: (updatedText:string)=> {dispatch(updateTextActionCreator(updatedText))},
        addPost: () => {dispatch(addPostActionCreator())}

    }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
