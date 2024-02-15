import PropTypes from "prop-types";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p
        className="postCredit"
        style={{ fontSize: 14 + "px", marginTop: 2 + "rem" }}
      >
        <Link
          style={{ color: "blue", marginRight: `${0.5}rem` }}
          to={`post/${post.id}`}
        >
          View Post
        </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;

PostExcerpt.propTypes = {
  postId: PropTypes.any,
};
