import React, { useEffect } from "react";
import { updatePosts } from "../../redux/actions/postActions";
import Post from "../post/post";
import { useSelector, useDispatch } from "react-redux";
// import { allPost } from "../../api/post";

import "./home.css";

const Home = () => {
    const token = useSelector(state => state.user.jwt);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePosts(token));
    }, [token, dispatch]);

    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className="posts-container">
            {posts.map((post, i) => {
                return <Post key={post._id + i} post={post} />;
            })}
        </div>
    );
};

export default Home;
