import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

import s from './MyPosts.module.css';






const MyPosts = (props) => {

    let postsArray = props.state.posts.map((post) =>
        <Post
            message={post.message}
            date={post.date}
            likeCount={post.likeCount}
            dislikeCount={post.dislikeCount} />);

    return (
        <div >
            <div className={s.newPost}>
                <NewPost state={props.state} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
            </div>


            {postsArray}
        </div >
    )
}


export default MyPosts;