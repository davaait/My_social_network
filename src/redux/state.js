const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            newPostText: "it-kamasutra.com",
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
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Ksusha'},
                {id: 2, name: 'Dmitry'},
                {id: 3, name: 'Olga'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (inputValue) => ({type: UPDATE_NEW_POST_TEXT, newText: inputValue});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

window.store = store;
export default store;

// store

