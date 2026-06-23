import { useEffect, useState } from "react";
import api from "../services/api";

function Recommendations() {

  const [
    recommendations,
    setRecommendations
  ] = useState([]);

  useEffect(() => {

    loadRecommendations();

  }, []);

  const loadRecommendations =
    async () => {

      try {

        const response =
          await api.get(
            "/api/recommendations"
          );

        setRecommendations(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div>

      <h1>
        Recommended Problems
      </h1>

      {recommendations.map(
        (problem, index) => (

          <div
            key={index}
          >

            <h3>
              {problem.title}
            </h3>

            <p>
              Difficulty:
              {" "}
              {problem.difficulty}
            </p>

            <p>
              Tag:
              {" "}
              {problem.tag}
            </p>

            <hr />

          </div>
        )
      )}

    </div>
  );
}

export default Recommendations;