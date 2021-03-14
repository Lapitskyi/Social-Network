import React from "react";
import StoryItem from "./StoryItem/StoryItem"
import s from "./Story.module.css"



const Story = (props) => {
    return (
        <ul className={s.storyList}>
            <StoryItem {...props}/>

        </ul>

    )
}




export default Story;