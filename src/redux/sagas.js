import {call, put, takeEvery, throttle} from 'redux-saga/effects'
import {USERS_FETCH, getUsersSuccess} from "./actions";

function* workGetUsersFetch() {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/users`)
    const users = yield response.json()
    yield put(getUsersSuccess(users))
}

function* sagaThrottle() {
    yield throttle(2000, USERS_FETCH, workGetUsersFetch)
}

function* sagaTakeEvery() {
    yield takeEvery(USERS_FETCH, workGetUsersFetch)
}

export default sagaThrottle
