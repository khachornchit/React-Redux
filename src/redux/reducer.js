import {USERS_SUCCESS} from "./actions";

const firstReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case USERS_SUCCESS:
            return {...state, users: action.users}

        default:
            return state
    }
}

export default firstReducer
