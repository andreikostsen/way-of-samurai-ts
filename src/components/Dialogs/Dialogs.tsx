import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsTypeArr, MessagesTypeArr} from "../../redux/store";
import React, {ChangeEvent} from 'react'
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";


type PropsType = {
    dialogs: DialogsTypeArr,
    textFromTextArea: string,
    messages: MessagesTypeArr,
    //
    // state: {
    //     dialogs: DialogsTypeArr,
    //
    //
    // },
    onClick: ()=>void,
    onChange: (updatedMessageText:string)=>void,

}



 const Dialogs=(props: PropsType)=> {

    const onClickHandler = () => {

      props.onClick()

    }


      const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
          props.onChange(e.currentTarget.value)

    }


        return(

             <div className={s.wrapper}>

                <div className={s.items}>

                    {props.dialogs.map(n=>
                        <DialogItem name={n.name}/>

                    )}


                </div>
                <div className={s.messages}>

                    <div><textarea onChange={onChangeHandler} value={props.textFromTextArea}></textarea></div>
                    <div><button onClick={onClickHandler}>Send message</button></div>

                    {props.messages.map(m=><Message message={m.message}/>)}


                </div>
            </div>

    )

}

export default Dialogs;