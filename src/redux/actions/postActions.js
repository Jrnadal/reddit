import { 
    ADD_POST, 
    UPDATING_POSTS, 
    UPDATED_POSTS,
    UPDATING_SUB_POSTS,
    UPDATED_SUB_POSTS
} from "./actionConstants";
import { allPost, getSubredditPosts } from "../../api/post";

export const addPost = (post) => ({ type: ADD_POST, payload: post });
// export const updatePosts = (posts) => ({type: UPDATE_POSTS, payload: posts})

export const updatePosts = (token) => async (dispatch) => {
    dispatch({ type: UPDATING_POSTS });
    try {
        const response = await allPost(token);
        dispatch({ type: UPDATED_POSTS, payload: response });
    } catch (err) {
        console.log(err);
    }
};

export const updateSubredditPosts = (sub, token) => async dispatch => {
    dispatch({ type: UPDATING_SUB_POSTS });
    try {
        const response = await getSubredditPosts(sub, token);
        dispatch({ type: UPDATED_SUB_POSTS, payload: response });
    } catch(err) {
        console.log(err);
    }
}
