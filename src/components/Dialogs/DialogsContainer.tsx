import React from 'react'
import Dialogs from "./Dialogs";
import {ActionType, DialogsTypeArr, MessagesTypeArr} from "../../redux/store";
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";




type PropsType = {

    state: {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,

    },

    dispatch: (action:ActionType)=>void,

}

export const DialogsContainer=(props:PropsType)=>{

    const addMessage = () => {

        props.dispatch(addMessageActionCreator())

    }


    const updateMessageText = (updatedMessageText:string) => {

        props.dispatch(updatedMessageTextActionCreator(updatedMessageText))

    }


    return (

        <Dialogs dialogs={props.state.dialogs}
                 textFromTextArea={props.state.textFromTextArea}
                 messages={props.state.messages}
                 // addMessage={addMessage}
                 // updateMessageText={updateMessageText}
                 onClick={addMessage}
                 onChange={updateMessageText}
        />

    )

}