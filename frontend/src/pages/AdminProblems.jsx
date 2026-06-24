import { useEffect, useState } from "react";
import api from "../services/api";

function AdminProblems() {

  const [problems, setProblems] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("EASY");

  const [tag, setTag] =
    useState("ARRAYS");

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

  const addProblem = async () => {

    try {

      await api.post(
        "/api/problems",
        {
          title,
          description,
          difficulty,
          tag
        }
      );

      loadProblems();

      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error);
    }
  };

  const deleteProblem =
    async (id) => {

      try {

        await api.delete(
          `/api/problems/${id}`
        );

        loadProblems();

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div className="container mt-4">

      <h1>
        Admin Problem Manager
      </h1>

      <div
        className="card shadow p-4 mb-4"
      >

        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <select
          className="form-select mb-3"
          value={difficulty}
          onChange={(e) =>
            setDifficulty(
              e.target.value
            )
          }
        >

          <option>EASY</option>
          <option>MEDIUM</option>
          <option>HARD</option>

        </select>

        <select
          className="form-select mb-3"
          value={tag}
          onChange={(e) =>
            setTag(
              e.target.value
            )
          }
        >

          <option>ARRAYS</option>
          <option>STRINGS</option>
          <option>TREES</option>
          <option>GRAPHS</option>
          <option>DP</option>

        </select>

        <button
          className="btn btn-primary"
          onClick={addProblem}
        >
          Add Problem
        </button>

      </div>

      <table
        className="table table-bordered table-striped"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Title</th>

            <th>Difficulty</th>

            <th>Tag</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            problems.map(
              problem => (

                <tr
                  key={problem.id}
                >

                  <td>
                    {problem.id}
                  </td>

                  <td>
                    {problem.title}
                  </td>

                  <td>
                    {problem.difficulty}
                  </td>

                  <td>
                    {problem.tag}
                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteProblem(
                          problem.id
                        )
                      }
                    >
                      Delete
                    </button>

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

export default AdminProblems;