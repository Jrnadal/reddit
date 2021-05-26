import React, { useState } from "react";
// import { addPost } from "../../redux/actions/postActions";
import { addPost } from "../../api/post";
import { useSelector } from "react-redux";

const AddPost = () => {
    // const [post,setPost] = useState();
    const [subReddit, setSubReddit] = useState("subreddit");
    // const [poster, setPoster] = useState("poster");
    const [title, setTitle] = useState("title");
    const [url, setURL] = useState("genericurl");

    const token = useSelector((state) => state.user.jwt);

    // const dispatch = useDispatch();

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const post = {
            subReddit: subReddit,
            title: title,
            url: url,
            token: token,
        };
        addPost(post);
        // dispatch(addPost(post));
        setSubReddit("");
        // setPoster("");
        setTitle("");
        setURL("");
    };
    return (
        <div className="add-post-container">
            <div className="add-post-header">
                <h2>Add a Post</h2>
            </div>
            <form className="input-container">
                <div>
                    <label>subReddit</label>
                    <input
                        type="text"
                        value={subReddit}
                        onChange={(e) => setSubReddit(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label>Poster</label>
                    <input
                        type="text"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </div> */}
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>URL</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setURL(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="submit"
                        onClick={(e) => handleSubmitBtn(e)}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddPost;
