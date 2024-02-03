import PropTypes from "prop-types";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p
        className="postCredit"
        style={{ fontSize: 14 + "px", marginTop: 2 + "rem" }}
      >
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />a
    </article>
  );
};

export default PostExcerpt;

PostExcerpt.propTypes = {
  post: PropTypes.any,
};
