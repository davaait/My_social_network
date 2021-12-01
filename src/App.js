import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import {Route, Routes} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Sidebar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs store={props.store}/>}/>;
                    <Route path='/profile/*'
                           element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>;
                </Routes>
            </div>
        </div>
    );
}

export default App;