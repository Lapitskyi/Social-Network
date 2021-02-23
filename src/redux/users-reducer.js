const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1,
            followed: "true",
            fullname: "Fullname1",
            photoUrl:"https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png",
            status: "status",
            location: {city: 'Ukraine', country: 'Kiev'}
        },
        {
            id: 2,
            followed: "true",
            fullname: "Fullname2",
            photoUrl:"https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png",
            status: "status",
            location: {city: 'Ukraine', country: 'Kiev'}
        },
        {
            id: 3,
            followed: "false",
            fullname: "Fullname3",
            photoUrl:"https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png",
            status: "status",
            location: {city: 'Ukraine', country: 'Kiev'}
        },
        {
            id: 4,
            followed: "false",
            fullname: "Fullname4",
            photoUrl:"https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png",
            status: "status",
            location: {city: 'Ukraine', country: 'Kiev'}
        },
        {
            id: 5,
            followed: "true",
            fullname: "Fullname5",
            photoUrl:"https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png",
            status: "LoremLoremLoremLorem",
            location: {city: 'Ukraine', country: 'Kiev'}
        },
    ]
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {
                            ...users, followed: true
                        }
                    }
                    return users
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {
                            ...users, followed: false
                        }
                    }
                    return users
                })
            }

        case SET_USERS: {
            return {...state, users:[...state.users,...action.users]}

        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default userReducer;