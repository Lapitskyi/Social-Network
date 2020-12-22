import React from 'react';
import Posts from './Post/Post';
import NewPost from './NewPost/NewPost';

import s from './MyPosts.module.css';

let postsData = [
    { id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "01.06.2020", likeCount: "2", dislikeCount: "1" },
    { id: 2, message: "Lorem ipsum dolor sit amet.", date: "01.07.2020", likeCount: "2", dislikeCount: "1" }
]




const MyPosts = () => {
    return (
        <div >

            <NewPost />
            <Posts message={postsData[0].message} date={postsData[0].date} likeCount={postsData[0].likeCount} dislikeCount={postsData[0].dislikeCount} />
            <Posts message={postsData[1].message} date={postsData[1].date} likeCount={postsData[1].likeCount} dislikeCount={postsData[1].dislikeCount} />



        </div >
    )
}


export default MyPosts;