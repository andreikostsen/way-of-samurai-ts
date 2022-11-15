import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsTypeArr, MessagesTypeArr} from "../../redux/store";
import React, {ChangeEvent} from 'react'
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";


type PropsType = {

    state: {
        dialogs: DialogsTypeArr,
        messages: MessagesTypeArr,
        textFromTextArea: string,

    },

    dispatch: (action:ActionType)=>void,

}



 const Dialogs=(props: PropsType)=> {

    const onClickHandler = () => {

        props.dispatch(addMessageActionCreator())

    }


      const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(updatedMessageTextActionCreator(e.currentTarget.value))

    }


        return(

             <div className={s.wrapper}>

                <div className={s.items}>

                    {props.state.dialogs.map(n=>
                        <DialogItem name={n.name}/>

                    )}


                </div>
                <div className={s.messages}>

                    <div><textarea onChange={onChangeHandler} value={props.state.textFromTextArea}></textarea></div>
                    <div><button onClick={onClickHandler}>Send message</button></div>

                    {props.state.messages.map(m=><Message message={m.message}/>)}


                </div>
            </div>

    )

}

export default Dialogs;