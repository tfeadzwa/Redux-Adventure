import "../../assets/addposts.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title && content && userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="add-posts">
      <h2 className="add-posts__heading">Add a New Post</h2>
      <form className="add-posts__form">
        <label className="add-posts__title-label" htmlFor="postTitle">
          Post Title
        </label>
        <input
          className="add-posts__title-input"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <label className="add-posts__content-label" htmlFor="postContent">
          Post Content
        </label>
        <input
          className="add-posts__content-input"
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button
          className="add-posts__save-post-btn"
          type="button"
          disabled={!canSave}
          onClick={onSavePostClicked}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
