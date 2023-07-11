import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updatedMessageTextActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";




const mapStateToProps = (state: AppRootStateType) => {

    return {
        dialogsPage: state.messagesPage
    }


}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (updatedMessageText:string) => {
            dispatch(updatedMessageTextActionCreator(updatedMessageText))
        }
    }

}


export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)