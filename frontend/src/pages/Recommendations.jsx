import { useEffect, useState } from "react";

import api from "../services/api";

import Card from "../components/ui/Card";

import Loader from "../components/ui/Loader";

import Badge from "../components/ui/Badge";

function Recommendations() {

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadRecommendations();

  }, []);

  const loadRecommendations = async () => {

    try {

      const response = await api.get("/api/recommendations");

      setRecommendations(response.data);

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

        AI Recommendations

      </h1>

      {

        recommendations.map((problem, index) => (

          <Card key={index}>

            <h2 className="text-2xl font-semibold">

              {problem.title}

            </h2>

            <div className="flex gap-3 mt-4">

              <Badge color="green">

                {problem.difficulty}

              </Badge>

              <Badge>

                {problem.tag}

              </Badge>

            </div>

          </Card>

        ))

      }

    </div>

  );

}

export default Recommendations;