import React from "react";
import StoryItem from "./StoryItem/StoryItem"
import s from "./Story.module.css"



const Story = (props) => {
    return (
        <ul className={s.storyList}>
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
        </ul>

    )
}




export default Story;