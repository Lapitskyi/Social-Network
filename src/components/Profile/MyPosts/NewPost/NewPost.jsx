import React from 'react';

import s from './NewPost.module.css';




const NewPost = (props) => {

    let newPostElement = React.createRef()


    // при нажатии на Button запускает функцию, которая берет данные с Textarea с помошью React.createRef() создает ссылку и пресваевает перемменной.
    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addPost();
        props.updateNewPostText('');
    };


    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (

        <div className={s.form}>
            <textarea className={s.formText} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <label className={s.inputLabel} >
                <input className={s.formInput} type="file" />
            </label>
            <button className={s.formBtn} onClick={addPost}></button>
        </div>


        // <form className={s.form}>
        //     <textarea className={s.formText} onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="Что у вас нового?" />
        //     {/* <textarea className={s.formText} placeholder="Что у вас нового?" ref={newPostElement} ></textarea> */}

        //     <label className={s.inputLabel} >
        //         <input className={s.formInput} type="file" />
        //     </label>
        //     <button className={s.formBtn} type="submit" onClick={addPost}></button>
        // </form>


    )
}




export default NewPost;