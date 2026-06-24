import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  const token =
    localStorage.getItem("token");

  return (

    <nav>

      {

        token && (

          <>

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

            <Link to="/submissions">
              My Submissions
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

          </>

        )

      }

    </nav>

  );
}

export default Navbar;