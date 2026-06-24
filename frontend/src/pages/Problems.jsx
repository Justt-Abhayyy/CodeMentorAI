import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Problems() {

  const [problems, setProblems] =
    useState([]);

  useEffect(() => {

    loadProblems();

  }, []);

  const loadProblems = async () => {

    try {

      const response =
        await api.get(
          "/api/problems"
        );

      setProblems(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="container mt-4">

      <h1 className="mb-4">
        Coding Problems
      </h1>

      <div className="row">

        {

          problems.map(problem => (

            <div
              className="col-md-4 mb-4"
              key={problem.id}
            >

              <div className="card h-100 shadow">

                <div className="card-body">

                  <h4 className="card-title">
                    {problem.title}
                  </h4>

                  <p>

                    <span
                      className="badge bg-primary"
                    >
                      {problem.difficulty}
                    </span>

                  </p>

                  <p>

                    <span
                      className="badge bg-secondary"
                    >
                      {problem.tag}
                    </span>

                  </p>

                  <Link
                    to={`/problems/${problem.id}`}
                    className="btn btn-success"
                  >
                    Solve Problem
                  </Link>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </div>
  );
}

export default Problems;