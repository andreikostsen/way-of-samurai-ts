import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsTypeArr, MessagesTypeArr} from "../../redux/state";
import React from 'react'

type PropsType = {

    state: {
        dialogs: DialogsTypeArr,
       messages: MessagesTypeArr

    }

}



 const Dialogs=(props: PropsType)=> {

        return(

            <div className={s.wrapper}>
                <div className={s.items}>

                    {props.state.dialogs.map(n=>
                        <DialogItem name={n.name}/>

                    )}


                </div>
                <div className={s.messages}>

                    {props.state.messages.map(m=><Message message={m.message}/>)}


                </div>
            </div>

    )

}

export default Dialogs;