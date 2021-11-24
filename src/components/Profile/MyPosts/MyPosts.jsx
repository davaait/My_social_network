import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 8},
    {id: 2, message: "It's my first post", likesCount: 27}
]

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

const MyPosts = () => {
    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;