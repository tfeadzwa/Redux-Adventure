import { Link } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

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
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
