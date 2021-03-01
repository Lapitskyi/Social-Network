const FOLLOV = 'FOLLOV';
const UNFOLLOV = 'UNFOLLOV';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1

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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USER_TOTAL_COUNT:
            return{
                ...state, totalCount:action.totalCount
            }

        default:
            return state;
    }
}

export const follovAC = (userId) => ({type: FOLLOV, userId});
export const unfollovAC = (userId) => ({type: UNFOLLOV, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUserTotalCount = (totalCount) => ({type: SET_USER_TOTAL_COUNT, totalCount});



export default usersReducer;