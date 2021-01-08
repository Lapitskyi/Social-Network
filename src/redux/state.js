let rerenderEntireTre = () => {
    console.log('update');
};



let state = {
    dialogPage: {
        photos: [
            { id: 1, img: "https://via.placeholder.com/70" }
        ],

        dialogs: [
            { id: 1, name: "Andrei" },
            { id: 2, name: "Natasha" },
            { id: 3, name: "Igor" },
            { id: 4, name: "Sasha" },
        ],

        messages: [
            { id: 1, massege: "Hi" },
            { id: 2, massege: "How a you" },
            { id: 3, massege: "Yo" },
            { id: 4, massege: "Kak del?" },
        ]
    },

    profilePage: {
        posts: [
            { id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "01.06.2020", likeCount: "2", dislikeCount: "1" },
            { id: 2, message: "Lorem ipsum dolor sit amet.", date: "01.07.2020", likeCount: "2", dislikeCount: "1" }
        ],
        newPostText: ''
    }

}

window.state = state;

// export без default

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        date: "06.01.2020",
        likeCount: "0",
        dislikeCount: "0"

    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTre(state);
}


export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTre(state);

}


export const subscribe = (observer) => {
    rerenderEntireTre = observer;
}


export default state;