import React from "react";
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div>
            <div>
                <img
                    src="https://www.bmw.by/content/dam/bmw/common/home/teaser/bmw-7series-sedan-gklplus-teaser-desktop.jpg.asset.1547636126503.jpg"
                    alt=""/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;