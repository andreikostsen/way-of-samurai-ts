import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import {StateType} from "./redux/store";


type PropsType = {

    state: StateType,
    AddPost: ()=>void,
    UpdateText: (updatedText:string)=>void,


}




const App = (props:PropsType) => {
    return (

        <BrowserRouter>
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <Routes>

                    <Route path="/profile"  element={<Profile state={props.state} AddPost={props.AddPost} UpdateText={props.UpdateText}/>} />
                    {/*<Route path="/dialogs"  element={<Dialogs state={props.messagesPage}/>} />*/}
                </Routes>

            </div>
       </BrowserRouter>
    )
        ;
}


export default App;
