import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.bmw.by/content/dam/bmw/common/home/teaser/bmw-7series-sedan-gklplus-teaser-desktop.jpg.asset.1547636126503.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;