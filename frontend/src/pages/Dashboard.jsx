import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div>

      <h1>
        Welcome To CodeMentorAI
      </h1>

      <hr />

      <h2>
        Quick Actions
      </h2>

      <ul>

        <li>
          <Link to="/problems">
            View Problems
          </Link>
        </li>

        <li>
          <Link to="/submissions">
            My Submissions
          </Link>
        </li>

        <li>
          <Link to="/leaderboard">
            Leaderboard
          </Link>
        </li>

        <li>
          <Link to="/recommendations">
            Recommendations
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Dashboard;