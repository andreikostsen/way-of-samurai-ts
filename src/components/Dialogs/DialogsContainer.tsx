import React from 'react'
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";



//  const DialogsContainer=()=> {
//         return(
//             <StoreContext.Consumer>
//                 {
//                     (store)=>{
//                         const onClickHandler = () => {
//                             store.dispatch(addMessageActionCreator())
//                         }
//                         const onChangeHandler = (updatedMessageText:string) => {
//                             store.dispatch(updatedMessageTextActionCreator(updatedMessageText))
//                         }
//                         return <Dialogs state={store.getState().messagesPage} onClick={onClickHandler} onChange={onChangeHandler}/>
//                     }
//                 }
//             </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state: AppRootStateType) => {
    return {
        state: state.messagesPage
    }

};

let mapDispatchToProps = (dispatch: any) => {
    return {
        onClick: () => {dispatch(addMessageActionCreator())},
        onChange: (updatedMessageText: string) => {dispatch(updatedMessageTextActionCreator(updatedMessageText))}

    }

};



const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;