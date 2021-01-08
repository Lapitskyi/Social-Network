import React from 'react';
import s from './MessagesItem.module.css';


const MessagesItem = (props) => {
    return (
        <li className={s.massegesItem}>{props.message}</li>
    )
};


export default MessagesItem;