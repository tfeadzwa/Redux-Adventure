import "../../assets/postslist.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading....</p>;
  } else if (postsStatus === "succeeded") {
    // sort posts by date posted
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
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

  return (
    <section className="postslist">
      <h1>Posts</h1>
      {content}
    </section>
  );
};

export default PostsList;
