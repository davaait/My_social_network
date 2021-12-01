import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            newPostText: "Enter text here",
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;

// store