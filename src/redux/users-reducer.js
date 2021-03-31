import {followAPI, usersAPI} from "../API/api";

const FOLLOV = 'FOLLOV';
const UNFOLLOV = 'UNFOLLOV';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_ISFETCHING = 'SET_ISFETCHING';
const TOGGLE_PROGRESS_ISFOLLOW = 'TOGGLE_PROGRESS_ISFOLLOW';


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollow: []

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
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_ISFETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_PROGRESS_ISFOLLOW:
            return {
                ...state,
                isFollow: action.isFollow
                    ? [...state.isFollow, action.userId]
                    : state.isFollow.filter((id) => id !== action.userId)
            }

        default:
            return state;
    }
}

export const follov = (userId) => ({type: FOLLOV, userId});
export const unfollov = (userId) => ({type: UNFOLLOV, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUserTotalCount = (totalCount) => ({type: SET_USER_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
export const toggleProgressIsFollow = (isFollow, userId) => ({type: TOGGLE_PROGRESS_ISFOLLOW, isFollow, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUserTotalCount(data.totalCount));
            });
    }
}

export const getCurrentPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getCurrentPage(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const getFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleProgressIsFollow(true, id))
        usersAPI.userFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follov(id))
                }
                dispatch(toggleProgressIsFollow(false, id))
            });
    }
}

export const getUnFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleProgressIsFollow(true, id))
        usersAPI.userUnFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollov(id))
                }
                dispatch(toggleProgressIsFollow(false, id))
            });
    }
}


export default usersReducer;