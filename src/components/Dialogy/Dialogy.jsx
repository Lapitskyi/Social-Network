import React from 'react';

import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";

import s from './Dialogy.module.css';
import {addMassegeCreate, NewMessageTextCreate} from "../../redux/state";


const Dialogy = (props) => {


    let dialogsArray = props.state.dialogs.map((dialog) =>
        <DialogsItem
            img={dialog.img}
            name={dialog.name}
            id={dialog.id}/>);
    let messagesArray = props.state.messages.map((message) =>
        <MessagesItem
            message={message.massege}

            id={message.id}/>);


    let addMassege = () => {
        props.dispatch(addMassegeCreate());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(NewMessageTextCreate(body));
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
                              placeholder="Enter text">

                    </textarea>
                    <button className={s.formBtn} onClick={addMassege}>Send</button>
                </div>

            </div>

        </div>
    )
}


export default Dialogy;