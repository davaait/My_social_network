import {rerenderEntireTree} from "../render.js";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 8},
            {id: 2, message: "It's my first post", likesCount: 27}
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ksusha'},
            {id: 2, name: 'Masik'},
            {id: 3, name: 'Father'},
            {id: 4, name: 'Serega'},
            {id: 5, name: 'Olga'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Whats up?!'},
            {id: 4, message: 'How is it going?'},
            {id: 5, message: 'Yo! Can you fix it?!'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Ksusha'},
            {id: 2, name: 'Dmitry'},
            {id: 3, name: 'Olga'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;