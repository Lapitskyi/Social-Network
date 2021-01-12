const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE-TEXT';

//для иницилизации ветки в store если данные не прийдут
let initialState = {

    dialogs: [
        {id: 1,img: "https://via.placeholder.com/70", name: "Andrei"},
        {id: 2,img: "https://via.placeholder.com/70", name: "Natasha"},
        {id: 3,img: "https://via.placeholder.com/70", name: "Igor"},
        {id: 4,img: "https://via.placeholder.com/70", name: "Sasha"},
    ],

    messages: [
        {id: 1, massege: "Hi"},
        {id: 2, massege: "How a you"},
        {id: 3, massege: "Yo"},
        {id: 4, massege: "*******"},
    ],
    newMessageText: ''
};


const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMassege = {
                id: 5,
                massege: state.newMessageText
            }

            if (state.newMessageText !== '') {
                state.messages.push(newMassege);
                state.newMessageText = '';
            }
            return state;

        case NEW_MESSAGE:
            state.newMessageText = action.body;
            return state;
        default:
            return state;


    }

}

export const addMassegeCreate = () => ({type: ADD_MESSAGE});
export const NewMessageTextCreate = (body) => ({
    type: NEW_MESSAGE, body: body
})


export default dialogsReducer;