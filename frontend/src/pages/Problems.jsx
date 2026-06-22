import { useEffect, useState } from "react";
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

      {problems.map(problem => (

        <div
          key={problem.id}
        >

          <h3>
            {problem.title}
          </h3>

          <p>
            {problem.difficulty}
          </p>

          <p>
            {problem.tag}
          </p>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default Problems;