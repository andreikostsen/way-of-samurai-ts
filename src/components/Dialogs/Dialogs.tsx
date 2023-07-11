import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React, {ChangeEvent} from 'react'
import {MessagesStateType} from "../../redux/messages-reducer";


type PropsType = {
    dialogsPage: MessagesStateType,
    addMessage: () => void,
    updateMessageText: (updatedMessageText: string) => void,
}


const Dialogs = (props: PropsType) => {
    const onClickHandler = () => {
        props.addMessage()
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }


    return (

        <div className={s.wrapper}>

            <div className={s.items}>

                {props.dialogsPage.dialogs.map(n =>
                    <DialogItem name={n.name}/>
                )}


            </div>
            <div className={s.messages}>

                <div><textarea onChange={onChangeHandler} value={props.dialogsPage.textFromTextArea}></textarea></div>
                <div>
                    <button onClick={onClickHandler}>Send message</button>
                </div>

                {props.dialogsPage.messages.map(m => <Message message={m.message}/>)}


            </div>
        </div>

    )

}

export default Dialogs;