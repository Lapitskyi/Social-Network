const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE = 'NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {

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