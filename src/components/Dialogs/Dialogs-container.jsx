import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    const sendNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={sendNewMessage} dialogsPage={state}/>)
}

export default DialogsContainer;