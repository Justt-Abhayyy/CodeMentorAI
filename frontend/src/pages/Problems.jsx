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

    <div>

      <h1>Problems</h1>

      {

        problems.map(problem => (

          <div
            key={problem.id}
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

            <Link
              to={`/problems/${problem.id}`}
            >

              <button>
                Open Problem
              </button>

            </Link>

            <hr />

          </div>

        ))

      }

    </div>
  );
}

export default Problems;