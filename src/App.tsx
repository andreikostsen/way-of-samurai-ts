import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import {ActionType} from "./redux/store";
import {AppRootStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type PropsType = {
    state: AppRootStateType,
    dispatch: (action:ActionType)=>void,
}



const App = (props:PropsType) => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path="/profile"  element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
                    <Route path="/dialogs"  element={<DialogsContainer state={props.state.messagesPage} dispatch={props.dispatch}/>} />
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
