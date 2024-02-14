import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));
 
  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: `${8}rem`,
        fontSize: 2 + "rem",
      }}
    >
      <h2 style={{ margin: `${2}rem ${2}rem` }}>{user.name}</h2>
      <ol>
        {postsForUser.map((post) => (
          <li key={post.date}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default UserPage;
