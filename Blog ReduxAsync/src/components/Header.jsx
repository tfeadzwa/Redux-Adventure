import { Link } from "react-router-dom";

const headerStyles = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  display: "flex",
  minHeight: `${6}rem`,
  color: "white",
  alignItems: "center",
  backgroundColor: `hsl(303, 76%, 31%)`,
};

const navStyles = {
  display: "flex",
  justifyContent: "space-between",
  minWidth: "100%",
};

const linkStyles = {
  display: "flex",
  gap: `${1}rem`,
  marginRight: `${3}rem`,
};

const listStyles = {
  listStyle: "none",
  color: "white",
};

const linkItem = {
  textDecoration: "none",
  color: "white",
  fontSize: `${1.5}rem`,
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <h1 style={{ marginLeft: `${2}rem`, fontSize: `${2}rem` }}>
          Redux Blog
        </h1>
        <ul style={linkStyles}>
          <li style={listStyles}>
            <Link style={linkItem} to="/">
              Home
            </Link>
          </li>
          <li style={listStyles}>
            <Link style={linkItem} to="post">
              Post
            </Link>
          </li>
          <li style={listStyles}>
            <Link style={linkItem} to="user">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
