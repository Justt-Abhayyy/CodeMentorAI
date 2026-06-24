import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import api from "../services/api";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] =
    useState(null);

  const [code, setCode] =
    useState(
`public class Main {

    public static void main(String[] args) {

        System.out.println("Hello CodeMentorAI");

    }
}`
    );

  const [output, setOutput] =
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

  const runCode = async () => {

    try {

      const response =
        await api.post(
          "/api/code/run",
          {
            code
          }
        );

      setOutput(
        response.data.output
      );

    } catch (error) {

      console.log(error);

      setOutput(
        "Execution Failed"
      );
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
          "Solution Submitted Successfully!"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Submission Failed"
        );
      }
    };

  if (!problem) {

    return (
      <h2 className="m-4">
        Loading...
      </h2>
    );
  }

  return (

    <div
      className="container-fluid mt-3"
    >

      <div className="row">

        <div
          className="col-md-5"
        >

          <div
            className="card shadow h-100"
          >

            <div
              className="card-body"
            >

              <h2>
                {problem.title}
              </h2>

              <hr />

              <p>

                <span
                  className="badge bg-primary"
                >
                  {problem.difficulty}
                </span>

                {" "}

                <span
                  className="badge bg-secondary"
                >
                  {problem.tag}
                </span>

              </p>

              <hr />

              <h5>
                Description
              </h5>

              <p>
                {problem.description}
              </p>

            </div>

          </div>

        </div>

        <div
          className="col-md-7"
        >

          <div
            className="card shadow"
          >

            <div
              className="card-body"
            >

              <div
                className="d-flex justify-content-between mb-3"
              >

                <h4>
                  Code Editor
                </h4>

                <select
                  className="form-select w-auto"
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

                </select>

              </div>

              <Editor
                height="500px"
                defaultLanguage="java"
                value={code}
                theme="vs-dark"
                onChange={(value) =>
                  setCode(value)
                }
              />

              <div
                className="mt-3"
              >

                <button
                  className="btn btn-success me-2"
                  onClick={runCode}
                >
                  Run Code
                </button>

                <button
                  className="btn btn-primary"
                  onClick={submitSolution}
                >
                  Submit Solution
                </button>

              </div>

              <hr />

              <h5>
                Output Console
              </h5>

              <pre
                style={{
                  backgroundColor:
                    "#111",

                  color:
                    "#00ff00",

                  minHeight:
                    "150px",

                  padding:
                    "15px",

                  borderRadius:
                    "10px"
                }}
              >

                {output}

              </pre>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProblemDetails;