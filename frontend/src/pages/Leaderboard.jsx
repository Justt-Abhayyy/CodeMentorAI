import { useEffect, useState } from "react";
import api from "../services/api";

function Leaderboard() {

  const [leaders, setLeaders] =
    useState([]);

  useEffect(() => {

    loadLeaderboard();

  }, []);

  const loadLeaderboard = async () => {

    try {

      const response =
        await api.get(
          "/api/leaderboard"
        );

      setLeaders(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="container mt-4">

      <h1>
        Leaderboard
      </h1>

      <table
        className="table table-striped table-bordered mt-4"
      >

        <thead>

          <tr>

            <th>Rank</th>

            <th>Name</th>

            <th>Submissions</th>

          </tr>

        </thead>

        <tbody>

          {

            leaders.map(
              leader => (

                <tr
                  key={leader.rank}
                >

                  <td>
                    #{leader.rank}
                  </td>

                  <td>
                    {leader.name}
                  </td>

                  <td>
                    {leader.submissions}
                  </td>

                </tr>

              )
            )

          }

        </tbody>

      </table>

    </div>
  );
}

export default Leaderboard;