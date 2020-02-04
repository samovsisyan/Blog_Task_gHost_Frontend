import {takeLatest, put, call} from 'redux-saga/effects';
import * as api from '../../api'

import {
    BLOG_REQUEST,
    BLOG_SUCCESS,
    BLOG_FAIL,

} from "../actions/blog";


function* handleGetBlog(action) {
    try {
        const data = yield call(api.getBlog, action.payload.data);
        yield put({
            type: BLOG_SUCCESS,
            payload: {user: data.user}
        });
    } catch (e) {
        console.log(e.message);
        yield put({
            type: BLOG_FAIL,
            message: e.response.data.message || e.message,
        })
    }
}

export default function* watcher() {
    yield takeLatest(BLOG_REQUEST, handleGetBlog)
}
