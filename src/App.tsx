import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./redux/state";
import Header from "./components/Header/Header";


type PropsType = {

    state: StateType
    addPost: (post:string)=>void;


}



const App = (props:PropsType) => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>

                    <Route path="/profile"  element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
                    <Route path="/dialogs"  element={<Dialogs state={props.state.messagesPage}/>} />
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
