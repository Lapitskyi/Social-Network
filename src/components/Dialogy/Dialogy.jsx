import React from 'react';

import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import NewPost from "../Profile/MyPosts/NewPost/NewPost"
import s from './Dialogy.module.css';


const Dialogy = (props) => {


    let dialogsArray = props.state.dialogs.map((dialog) =>
        <DialogsItem
            img={dialog.img}
            name={dialog.name}
            id={dialog.id} />);
    let messagesArray = props.state.messages.map((message) =>
        <MessagesItem
            message={message.massege}

            id={message.id} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogInner}>
                <ul className={s.userList}>
                    {dialogsArray}
                </ul >
            </div>

            <div className={s.messageInner}>
                <ul className={s.massegesList}>

                    {messagesArray}

                </ul>
                <NewPost />
            </div>

        </div >
    )
}



export default Dialogy;