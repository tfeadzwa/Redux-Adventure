import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ post }) => {
  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😲",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  const dispatch = useDispatch();

  const divStyles = {
    display: "flex",
    gap: `${0.5}rem`,
    marginTop: `${1}rem`,
  };

  const btnStyles = {
    cursor: "pointer",
    backgroundColor: "inherit",
    border: "none",
  };

  const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        style={btnStyles}
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div style={divStyles}>{reactionsButton}</div>;
};

export default ReactionButtons;

ReactionButtons.propTypes = {
  post: PropTypes.object,
};
