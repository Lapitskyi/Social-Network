import React from 'react';

import s from './NewPost.module.css';




const NewPost = (props) => {
    return (
        <div className={s.newPost}>
            <form className={s.form} action="/" method="POST" >

                <textarea className={s.formText} placeholder="Напишите что небудь"></textarea>

                <label className={s.inputLabel} >
                    <input className={s.formInput} type="file" />
                </label>
                <button className={s.formBtn} type="submit"></button>

            </form>
        </div>

    )
}




export default NewPost;