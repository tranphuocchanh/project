import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../store/actions/postActions";

const Addform = ({ addPost }) => {
  const [userId, setUserId] = useState("1");
  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };
  const [title, setTitle] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [body, setBody] = useState("");
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && body !== "" && userId !== "") {
      const newPost = {
        userId,
        id: uuidv4(),
        title,
        body,
      };
      addPost(newPost);
      setBody("");
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label for="userId">UserID:</label>
        <br />
        <input
          type="text"
          id="userId"
          onChange={onUserIdChange}
          value={userId}
          style={{ width: "40px" }}
        />
        <br />
        <label for="userId">Title:</label>
        <br />

        <input type="text" id="title" onChange={onTitleChange} value={title} />
        <br />
        <label for="userId">Content:</label>
        <br />

        <input type="text" id="body" onChange={onBodyChange} value={body} />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
addPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};
const mapStatetoProps = (state) => ({});
export default connect(mapStatetoProps, { addPost })(Addform);
