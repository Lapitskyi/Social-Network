const FOLLOV = 'FOLLOV';
const UNFOLLOV = 'UNFOLLOV';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOV:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOV:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}

        }

        default:
            return state;
    }
}

export const follovAC = (userId) => ({type: FOLLOV, userId});
export const unfollovAC = (userId) => ({type: UNFOLLOV, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;