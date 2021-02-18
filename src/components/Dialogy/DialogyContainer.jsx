import React from 'react';
import Dialogy from "./Dialogy";

import {addMassegeCreate, NewMessageTextCreate} from "../../redux/dialogs-reducer";


const DialogyContainer = (props) => {
    let state = props.store.getState().dialogPage;


    let addMassege = () => {
        props.store.dispatch(addMassegeCreate());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(NewMessageTextCreate(body));
    }


    return (
       <Dialogy
           NewMessageText={onMessageChange}
           addMassegeCreate={addMassege}
           dialogPage={state}
       />
    )
}


export default DialogyContainer;