export const BLOG_REQUEST = 'BLOG_REQUEST';
export const BLOG_SUCCESS = 'BLOG_SUCCESS';
export const BLOG_FAIL = 'BLOG_FAIL';


export function getBlog(data) {
    return {
        type: BLOG_REQUEST, payload: { data },
    };
}
