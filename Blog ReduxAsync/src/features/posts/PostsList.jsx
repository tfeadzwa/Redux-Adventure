import "../../assets/postslist.scss";
import { useSelector } from "react-redux";
import { getPostsStatus, getPostsError, selectPostIds } from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const orderedPosts = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading....</p>;
  } else if (postsStatus === "succeeded") {
    // sort posts by date posted

    content = orderedPosts.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  } else if (postsStatus === undefined) {
    content = (
      <p>
        Network Error!. <br />
        Please check your internet connection.
      </p>
    );
  }

  return <section className="postslist">{content}</section>;
};

export default PostsList;
