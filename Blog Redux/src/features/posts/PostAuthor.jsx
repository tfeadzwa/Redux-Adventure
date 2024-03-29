import PropTypes from "prop-types";
import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <span>by {author?.name || "Unkown author"}</span>;
};

export default PostAuthor;

PostAuthor.propTypes = {
  userId: PropTypes.string,
};
