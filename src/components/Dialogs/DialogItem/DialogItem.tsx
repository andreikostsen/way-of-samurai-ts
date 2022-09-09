import React from 'react'
import s from "../Dialogs.module.css";

type PropsType = {

   name: string

}


export const DialogItem=(props:PropsType)=>{

    // <div className={s.item + " " + s.active}>Andrei</div>

   return (

    <div className={s.item}>{props.name}</div>
   )

}