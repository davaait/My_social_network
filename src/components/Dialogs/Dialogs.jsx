import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialogue + ' ' + s.active}>
                    Ksusha
                </div>
                <div className={s.dialogue}>
                    Masik
                </div>
                <div className={s.dialogue}>
                    Father
                </div>
                <div className={s.dialogue}>
                    Serega
                </div>
                <div className={s.dialogue}>
                    Olga
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Whats up?!</div>
            </div>
        </div>
    )
}

export default Dialogs;