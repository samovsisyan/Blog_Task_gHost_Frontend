import {BLOG_REQUEST,BLOG_SUCCESS,BLOG_FAIL,} from '../actions/blog';

const initialState = {
    authError: '',
    blog: {},

};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case BLOG_REQUEST: {
            return {...state,  authError: ''}
        }

        case BLOG_SUCCESS: {
            return {...state, user: action.payload.user}
        }

        case BLOG_FAIL: {
            return {...state, authError: action.message, blogData: {}}
        }

        default : {
            return state
        }
    }

}
