import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

    window.location.reload();
  };

  if (!token) {

    return null;
  }

  return (

    <nav
      style={{
        padding: "15px",
        backgroundColor: "#f4f4f4",
        marginBottom: "20px"
      }}
    >

      <Link to="/dashboard">
        Dashboard
      </Link>

      {" | "}

      <Link to="/profile">
        Profile
      </Link>

      {" | "}

      <Link to="/problems">
        Problems
      </Link>

      {" | "}

      <Link to="/leaderboard">
        Leaderboard
      </Link>

      {" | "}

      <Link to="/recommendations">
        Recommendations
      </Link>

      {" | "}

      <button onClick={logout}>
        Logout
      </button>

    </nav>
  );
}

export default Navbar;