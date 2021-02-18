import React from 'react';

import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../StoreContecxt";

/*
 --- Первый вариант для создание контейнерной компоненты которая обслуживает даными функциональную ---

const NewPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreate());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreate(text);
        props.store.dispatch(action);
    }

    return (
        <NewPost updateNewPostText={onPostChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
        />
    )

}
*/

// Вто Для создания Context API
const NewPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreate());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreate(text);
                        store.dispatch(action);
                    }

                    return <NewPost updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>

    )
}
export default NewPostContainer;