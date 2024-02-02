import PostAuthor from "./PostAuthor";
import { useSelector } from "react-redux";
import "../../assets/postslist.scss";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p
        className="postCredit"
        style={{ fontSize: 14 + "px", marginTop: 2 + "rem" }}
      >
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="postslist">
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
