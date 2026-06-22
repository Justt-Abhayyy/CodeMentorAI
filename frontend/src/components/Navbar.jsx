import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  return (

    <nav>

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

      <button onClick={logout}>
        Logout
      </button>

    </nav>
  );
}

export default Navbar;