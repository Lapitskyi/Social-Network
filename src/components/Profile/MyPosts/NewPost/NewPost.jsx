import React from 'react';

import s from './NewPost.module.css';
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../../redux/profile-reduser";




const NewPost = (props) => {

    let newPostElement = React.createRef()


    // при нажатии на Button запускает функцию, которая берет данные с Textarea с помошью React.createRef() создает ссылку и пресваевает перемменной.
    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost();
        // props.updateNewPostText('');
        props.dispatch(addPostActionCreate());
    }

    // для считыванния введенных символов для прохожденния введеных символов через store и возврата
    let onPostChange = () => {
        // props.updateNewPostText(text);
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreate(text));

    }

    return (

        <div className={s.form}>
            <textarea className={s.formText}
                      onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}
                      placeholder="Что у вас нового?" />

            <label className={s.inputLabel} >
                <input className={s.formInput} type="file" />
            </label>
            <button className={s.formBtn} onClick={addPost}></button>
        </div>


    )
}




export default NewPost;