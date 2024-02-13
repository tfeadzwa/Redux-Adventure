import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPostById, updatePost } from "./postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";
import "../../assets/editpost.scss";

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.body || "");
  const [userId, setUserId] = useState(post?.userId || "");
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  if (!post)
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        resetStates();
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();
      resetStates();
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setRequestStatus("idle");
    }
  };

  const resetStates = () => {
    setTitle("");
    setContent("");
    setUserId("");
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="editpost">
      <h2 className="editpost__header">Edit Post</h2>
      <form className="editpost__form">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          className="editpost__select"
          id="postAuthor"
          defaultValue={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="editpost__textarea"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          className="editpost__savepostbtn"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
        <button
          className="editpost__deletepostbtn"
          type="button"
          onClick={onDeletePostClicked}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
