import React, {useRef} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    const inputValue = useRef(null);

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    const sendNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.text}>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' ref={inputValue} />
                </div>
                <div>
                    <button onClick={sendNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;