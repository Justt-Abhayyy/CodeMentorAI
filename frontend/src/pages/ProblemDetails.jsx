import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] =
    useState(null);

  const [code, setCode] =
    useState("");

  const [language, setLanguage] =
    useState("Java");

  useEffect(() => {

    loadProblem();

  }, []);

  const loadProblem = async () => {

    try {

      const response =
        await api.get(
          `/api/problems/${id}`
        );

      setProblem(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  const submitSolution =
    async () => {

      try {

        await api.post(
          `/api/submissions/${id}`,
          {
            code,
            language,
            status: "SOLVED"
          }
        );

        alert(
          "Solution submitted successfully!"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Submission failed"
        );
      }
    };

  if (!problem) {

    return <h2>Loading...</h2>;
  }

  return (

    <div>

      <h1>
        {problem.title}
      </h1>

      <p>
        <b>Difficulty:</b>
        {" "}
        {problem.difficulty}
      </p>

      <p>
        <b>Tag:</b>
        {" "}
        {problem.tag}
      </p>

      <hr />

      <p>
        {problem.description}
      </p>

      <hr />

      <h3>
        Write Solution
      </h3>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(
            e.target.value
          )
        }
      >

        <option>
          Java
        </option>

        <option>
          Python
        </option>

        <option>
          C++
        </option>

      </select>

      <br />
      <br />

      <textarea
        rows="15"
        cols="80"
        value={code}
        onChange={(e) =>
          setCode(
            e.target.value
          )
        }
        placeholder="Write your solution here..."
      />

      <br />
      <br />

      <button
        onClick={
          submitSolution
        }
      >
        Submit Solution
      </button>

    </div>
  );
}

export default ProblemDetails;