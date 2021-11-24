import React from "react";
import './Navbar.module.css';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' style={({isActive}) => ({color:isActive ? 'blue' : 'white'})}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' style={({isActive}) => ({color:isActive ? 'blue' : 'white'})}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' style={({isActive}) => ({color:isActive ? 'blue' : 'white'})}>News feed</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' style={({isActive}) => ({color:isActive ? 'blue' : 'white'})}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' style={({isActive}) => ({color:isActive ? 'blue' : 'white'})}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;