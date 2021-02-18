import React from 'react';
import Dialogy from "./Dialogy";

import {addMassegeCreate, NewMessageTextCreate} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs:state.dialogPage.dialogs,
        messages:state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMassegeCreate: () => {
           dispatch(addMassegeCreate());
        },
        NewMessageText: (body) => {
            dispatch(NewMessageTextCreate(body));
        }

    }
}


const DialogyContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogy);
export default DialogyContainer;