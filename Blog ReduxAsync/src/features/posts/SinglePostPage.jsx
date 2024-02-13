import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link, useParams } from "react-router-dom";

const divStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: `${10}rem`,
};

const articleStyles = {
  border: `${0.0625}rem solid black`,
  borderRadius: `${0.5}rem`,
  marginTop: `${1}rem`,
  padding: `${2}rem`,
  width: `${60}%`,
  fontSize: `${1.125}rem`,
};

const h1Styles = {
  fontSize: `${2}rem`,
  fontWeight: `bolder`,
  marginBottom: `${1}rem`,
};

const postCredit = {
  fontSize: `${1}rem`,
  marginTop: `${1}rem`,
};

const editPost = {
  marginRight: `${0.5}rem`,
};

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post)
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );

  return (
    <div style={divStyles}>
      <article style={articleStyles}>
        <h1 style={h1Styles}>{post.title}</h1>
        <p>{post.body}</p>
        <p style={postCredit}>
          <Link style={editPost} to={`/post/edit/${post.id}`}>
            Edit Post
          </Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </div>
  );
};

export default SinglePostPage;
