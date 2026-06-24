import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/login");
  };

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >

      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/dashboard"
        >
          CodeMentorAI
        </Link>

        <div
          className="navbar-nav"
        >

          <Link
            className="nav-link"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link"
            to="/problems"
          >
            Problems
          </Link>

          <Link
            className="nav-link"
            to="/submissions"
          >
            Submissions
          </Link>

          <Link
            className="nav-link"
            to="/leaderboard"
          >
            Leaderboard
          </Link>

          <Link
            className="nav-link"
            to="/recommendations"
          >
            Recommendations
          </Link>

          <Link
            className="nav-link"
            to="/profile"
          >
            Profile
          </Link>

          <Link
            className="nav-link"
            to="/admin/problems"
          >
            Admin
          </Link>

        </div>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;