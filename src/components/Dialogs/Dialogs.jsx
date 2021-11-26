import React, {useRef} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);

    const inputValue = useRef(null);

    const newMessage = () => {
        let message = inputValue.current.value;
        alert(message);
    }
    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.text}>
                <div>
                    <input ref={inputValue} type="text"/>
                </div>
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;