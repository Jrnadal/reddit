import {
    ADD_POST,
    UPDATING_POSTS,
    UPDATED_POSTS,
    ADD_COMMENT,
    ADD_ONE_TO_VOTE,
    MINUS_ONE_TO_VOTE,
    UPDATED_SUB_POSTS,
    UPDATING_SUB_POSTS
} from "../actions/actionConstants";
import { v4 } from "uuid";

const initialState = {
    gettingPosts: false,
    gettingSubPosts: false,
    subPosts: [],
    posts: [
        // {
        //     id: v4(),
        //     title: "Angry Pug",
        //     time: new Date(),
        //     username: "DukeOfWindsor",
        //     subReddit: "r/pugs",
        //     url:
        //         "https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png",
        //     votes: 9700,
        //     comments: ["hello", "bye", "hi again"],
        // },
    ],
};

const postReducer = (state = initialState, action) => {
    let index;
    let tempPosts;
    let postIds;

    switch (action.type) {
        case ADD_COMMENT:
            const postComments = state.posts.map((post) => {
                return post.id;
            });
            index = postComments.indexOf(action.payload.id);
            tempPosts = [...state.posts];
            tempPosts[index].comments.push(action.payload.comment);
            return { ...state, posts: tempPosts };
        case ADD_ONE_TO_VOTE:
            postIds = state.posts.map((post) => {
                return post.id;
            });
            index = postIds.indexOf(action.payload);
            tempPosts = [...state.posts];
            tempPosts[index].votes = tempPosts[index].votes + 1;
            return { ...state, posts: tempPosts };
        case MINUS_ONE_TO_VOTE:
            postIds = state.posts.map((post) => {
                return post.id;
            });
            index = postIds.indexOf(action.payload);
            tempPosts = [...state.posts];
            tempPosts[index].votes = tempPosts[index].votes - 1;
            return { ...state, posts: tempPosts };
        case ADD_POST:
            const post = {
                id: v4(),
                title: action.payload.title,
                time: new Date(),
                username: action.payload.username,
                subReddit: action.payload.subReddit,
                url: action.payload.url,
                votes: 0,
                comments: [],
            };
            tempPosts = [...state.posts];
            tempPosts.push(post);
            return { ...state, posts: tempPosts };
        case UPDATING_POSTS:
            return { ...state, gettingPosts: true };
        case UPDATED_POSTS:
            return {
                ...state,
                gettingPosts: false,
                posts: action.payload.data,
            };
        case UPDATING_SUB_POSTS:
            return { ...state, gettingSubPosts: true };
        case UPDATED_SUB_POSTS:
            return { ...state, gettingSubPosts: false, subPosts: action.payload.data };
        default:
            return state;
    }
};

export default postReducer;
