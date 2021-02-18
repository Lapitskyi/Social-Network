import React from 'react';

import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

import s from './Dialogy.module.css';


const Dialogy = (props) => {


    let dialogsArray = props.dialogs.map((dialog) =>
        <DialogsItem
            key={dialog.id}
            img={dialog.img}
            name={dialog.name}
            id={dialog.id}/>);


    let messagesArray = props.messages.map((message) =>
        <MessagesItem
            message={message.massege}
            key={message.id}
            id={message.id}/>);


    let onAddMassege = () => {
        props.addMassegeCreate();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.NewMessageText(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogInner}>
                <ul className={s.userList}>
                    {dialogsArray}
                </ul>
            </div>

            <div className={s.messageInner}>
                <ul className={s.massegesList}>
                    {messagesArray}
                </ul>

                <div className={s.form}>
                    <textarea className={s.formText}
                              onChange={onMessageChange}
                              value={props.newMessageText}
                              placeholder="Enter text"/>


                    <label className={s.inputLabel}>
                        <input className={s.formInput} type="file"/>
                    </label>
                    <button className={s.formBtn} onClick={onAddMassege}>Send</button>
                </div>

            </div>

        </div>
    )
}


export default Dialogy;