import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: 'Ksusha'},
    {id: 2, name: 'Masik'},
    {id: 3, name: 'Father'},
    {id: 4, name: 'Serega'},
    {id: 5, name: 'Olga'},
]

let dialogsElements = dialogsData
    .map( d => <DialogItem name={d.name} id={d.id}/> );

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Whats up?!'},
    {id: 4, message: 'How is it going?'},
    {id: 5, message: 'Yo! Can you fix it?!'},
]

let messagesElements = messages.map(m => <Message message={m.message}/> );

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;