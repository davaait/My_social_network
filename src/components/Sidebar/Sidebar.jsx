import React from "react";
import s from './Sidebar.module.css';
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
    let friendsItem = props.state.friends
        .map(f => <SidebarItem name={f.name}/>);
    return (
        <div className={s.sidebar}>
            <div className={s.sidebarItem}>
                { friendsItem }
            </div>
        </div>
    )
}

export default Sidebar;