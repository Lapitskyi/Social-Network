const ADD_POST = 'ADD-POST';
const NEW_POST = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE-TEXT';


let store = {
    _state: {
        dialogPage: {
            photos: [
                {id: 1, img: "https://via.placeholder.com/70"}
            ],

            dialogs: [
                {id: 1, name: "Andrei"},
                {id: 2, name: "Natasha"},
                {id: 3, name: "Igor"},
                {id: 4, name: "Sasha"},
            ],

            messages: [
                {id: 1, massege: "Hi"},
                {id: 2, massege: "How a you"},
                {id: 3, massege: "Yo"},
                {id: 4, massege: "*******"},
            ],
            newMessageText: ''
        },

        profilePage: {
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
        }
    },

    _callSubscriber() {
        console.log('update');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {     // у action  должен быть {type:''}

        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                date: "06.01.2020",
                likeCount: "0",
                dislikeCount: "0"
            };

            if (this._state.profilePage.newPostText != '') {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
            }
            ;

            this._callSubscriber(this._state);
        } else if (action.type === NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);


        } else if (action.type === ADD_MESSAGE) {
            let newMassege = {
                id: 5,
                massege: this._state.dialogPage.newMessageText
            }

            if (this._state.dialogPage.newMessageText != '') {
                this._state.dialogPage.messages.push(newMassege);
                this._state.dialogPage.newMessageText = '';
            }

            this._callSubscriber(this._state);

        } else if (action.type === NEW_MESSAGE) {
            this._state.dialogPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }

    }
}

// если функция только возвращает записует сокращенно


//Post
export const addPostActionCreate = () => ({type: ADD_POST});
export const updateNewPostTextActionCreate = (text) => ({
    type: NEW_POST, newText: text
})

//Message
export const addMassegeCreate = () => ({type: ADD_MESSAGE});
export const NewMessageTextCreate = (body) => ({
    type: NEW_MESSAGE, body: body
})


window.state = store;
export default store;