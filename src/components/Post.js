import React, { useEffect } from "react";
import Addform from "./AddForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost, deletePost } from "../store/actions/postActions";

const Post = ({ posts, getPost, deletePost }) => {
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-list">
      <Addform />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            UserID: {post.userId}
            <h1>
              {post.title}
              <button onClick={deletePost.bind(this, post.id)}>Delete</button>
            </h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
Post.propTypes = {
  posts: PropTypes.array.isRequired,
  getPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStatetoProps = (state) => ({
  posts: state.myPosts.post,
});
export default connect(mapStatetoProps, { getPost, deletePost })(Post);
