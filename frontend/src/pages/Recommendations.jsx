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

    <div className="container mt-4">

      <h1>
        Recommended Problems
      </h1>

      <div className="row">

        {

          recommendations.map(
            (problem, index) => (

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <div
                  className="card shadow h-100"
                >

                  <div
                    className="card-body"
                  >

                    <h4>
                      {problem.title}
                    </h4>

                    <p>

                      <span
                        className="badge bg-primary"
                      >
                        {
                          problem.difficulty
                        }
                      </span>

                    </p>

                    <p>

                      <span
                        className="badge bg-secondary"
                      >
                        {
                          problem.tag
                        }
                      </span>

                    </p>

                  </div>

                </div>

              </div>

            )
          )

        }

      </div>

    </div>
  );
}

export default Recommendations;