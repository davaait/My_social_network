import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (<div className={s.item}>
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>
            {props.message}
            <div>
            <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;