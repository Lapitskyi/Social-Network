import React from 'react';
import {connect} from "react-redux";

import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";



let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreate(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreate());
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;