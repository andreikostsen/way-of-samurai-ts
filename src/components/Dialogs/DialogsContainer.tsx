import {ActionType, DialogsTypeArr, MessagesTypeArr} from "../../redux/store";
import React from 'react'
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";


type PropsType = {

    state: {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,

    },

    dispatch: (action:ActionType)=>void,

}

 const DialogsContainer=(props: PropsType)=> {

    const onClickHandler = () => {
        props.dispatch(addMessageActionCreator())
    }

      const onChangeHandler = (updatedMessageText:string) => {
        props.dispatch(updatedMessageTextActionCreator(updatedMessageText))

    }


        return(

            <Dialogs state={props.state} onClick={onClickHandler} onChange={onChangeHandler}/>
    )

}

export default DialogsContainer;