import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

import s from './MyPosts.module.css';






const MyPosts = (props) => {

    let postsArray = props.posts.map((post) =>
        <Post
            message={post.message}
            date={post.date}
            likeCount={post.likeCount}
            dislikeCount={post.dislikeCount} />);

    return (
        <div >
            <div className={s.newPost}>
                <NewPost dispatch={props.dispatch} newPostText={props.newPostText} />
            </div>


            {postsArray}
        </div >
    )
}


export default MyPosts;