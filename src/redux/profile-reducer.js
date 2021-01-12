const ADD_POST = 'ADD-POST';
const NEW_POST = 'UPDATE-NEW-POST-TEXT';


//для иницилизации ветки в store если данные не прийдут
let initialState = {
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "01.06.2020",
            likeCount: "2",
            dislikeCount: "1"
        },
        {id: 2, message: "Lorem ipsum dolor sit amet.", date: "01.07.2020", likeCount: "2", dislikeCount: "1"}
    ],
    newPostText: ''
};


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                date: "06.01.2020",
                likeCount: "0",
                dislikeCount: "0"
            };

            if (state.newPostText !== '') {
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;

        case NEW_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }

}

// если функция только возвращает записует сокращенно
export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({
    type: NEW_POST, newText: text
})

export default profileReducer;