import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsTypeArr, MessagesTypeArr} from "../../redux/state";
import React, {ChangeEvent} from 'react'
import {ActionType, addMessageActionCreator, StateType, updatedMessageTextActionCreator} from "../../redux/store";

type PropsType = {

    state: StateType,

    dispatch: (action:ActionType)=>void,

}



 const Dialogs=(props: PropsType)=> {

    const onClickHandler = () => {

        props.dispatch(addMessageActionCreator())

    }


      const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
// debugger
        // let updatedMessageText= e.currentTarget.value;
        props.dispatch(updatedMessageTextActionCreator(e.currentTarget.value))

    }


        return(

             <div className={s.wrapper}>

                <div className={s.items}>

                    {props.state.messagesPage.dialogs.map(n=>
                        <DialogItem name={n.name}/>

                    )}


                </div>
                <div className={s.messages}>

                    <div><textarea onChange={onChangeHandler} value={props.state.messagesPage.textFromTextArea}></textarea></div>
                    <div><button onClick={onClickHandler}>Send message</button></div>

                    {props.state.messagesPage.messages.map(m=><Message message={m.message}/>)}


                </div>
            </div>

    )

}

export default Dialogs;