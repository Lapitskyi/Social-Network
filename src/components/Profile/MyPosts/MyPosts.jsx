import React from 'react';
import Post from './Post/Post';
import NewPostContainer from "./NewPost/NewPostContainer";


import s from './MyPosts.module.css';



const MyPosts = (props) => {
    let state = props.store.getState();

    let postsArray = state.profilePage.posts.map((post) =>
        <Post
            message={post.message}
            date={post.date}
            likeCount={post.likeCount}
            dislikeCount={post.dislikeCount} />);

    return (
        <div >
            <div className={s.newPost}>
                <NewPostContainer  store={props.store} />
            </div>

            {postsArray}
        </div >
    )
}


export default MyPosts;