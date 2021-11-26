import React, {useRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const inputRef = useRef(null);

    const addPost = () => {
        let inputValue = inputRef.current.value;
        props.addPost(inputValue)
    }

    return (<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input ref={inputRef} type="text"/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;