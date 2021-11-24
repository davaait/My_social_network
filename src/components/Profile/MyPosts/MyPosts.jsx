import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likesCount='8'/>
            <Post message="It's my first post" likesCount='27'/>
        </div>
    )
}

export default MyPosts;