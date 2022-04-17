export const USERS_FETCH = 'USERS_FETCH';
export const USERS_SUCCESS = 'USERS_SUCCESS';

// dispatch
export const getUsersFetch = () => ({
    type: USERS_FETCH
})

export const getUsersSuccess = (users) => ({
    type: USERS_SUCCESS,
    users
})
