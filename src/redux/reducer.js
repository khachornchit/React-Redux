import {USERS_SUCCESS} from "./actions";

const usersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case USERS_SUCCESS:
            return {...state, users: action.users}

        default:
            return state
    }
}

export default usersReducer
