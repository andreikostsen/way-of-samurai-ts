import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {AppRootStateType, store} from "./redux/redux-store";
import {useDispatch} from "react-redux";




const App = () => {

    let stateForProfile = store.getState().profilePage
    let stateForDialogs = store.getState().messagesPage

   const dispatch = useDispatch()

    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>
                    <Route path="/profile"  element={<Profile state={stateForProfile} dispatch={dispatch} /> } />
                    <Route path="/dialogs"  element={<DialogsContainer state={stateForDialogs} dispatch={dispatch}/>} />
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
