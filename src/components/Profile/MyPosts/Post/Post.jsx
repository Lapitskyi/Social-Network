import React from 'react';

import s from './Post.module.css';



const Post = (props) => {
    return (
        <div className={s.post}>
            {props.message}

            <div className={s.footerPost}>
                <div className={s.dataPost}>
                    {props.date}
                </div>

                <ul className={s.actionPostList}>
                    <li className={s.actionPostItem}> {props.likeCount} </li>
                    <li className={s.actionPostItem}> {props.dislikeCount} </li>
                </ul>
            </div>
        </div >
    )
}


export default Post;