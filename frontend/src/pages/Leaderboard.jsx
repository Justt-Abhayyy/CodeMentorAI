import { useEffect, useState } from "react";

import api from "../services/api";

import Loader from "../components/ui/Loader";

import Card from "../components/ui/Card";

function Leaderboard() {

  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadLeaderboard();

  }, []);

  const loadLeaderboard = async () => {

    try {

      const response = await api.get("/api/leaderboard");

      setLeaders(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="space-y-8">

      <h1 className="text-4xl font-bold">

        Leaderboard

      </h1>

      {

        leaders.map(leader => (

          <Card key={leader.rank}>

            <div className="flex justify-between items-center">

              <h2 className="text-2xl">

                #{leader.rank}

              </h2>

              <h2 className="text-xl">

                {leader.name}

              </h2>

              <h2 className="text-blue-400">

                {leader.submissions} Solved

              </h2>

            </div>

          </Card>

        ))

      }

    </div>

  );

}

export default Leaderboard;