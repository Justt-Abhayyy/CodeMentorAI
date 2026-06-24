import { useEffect, useState } from "react";
import api from "../services/api";

function MySubmissions() {

  const [submissions, setSubmissions] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    loadSubmissions();

  }, []);

  const loadSubmissions = async () => {

    try {

      const response =
        await api.get(
          "/api/submissions/my"
        );

      setSubmissions(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  const getBadgeClass =
    (status) => {

      if (status === "SOLVED") {

        return "bg-success";
      }

      if (status === "PENDING") {

        return "bg-warning";
      }

      return "bg-danger";
    };

  const filteredSubmissions =
    submissions.filter(
      submission =>

        submission.problem?.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (

    <div className="container mt-4">

      <h1>
        My Submissions
      </h1>

      <input
        className="form-control mb-3"
        placeholder="Search Problem..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <table
        className="table table-striped table-bordered"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Problem</th>

            <th>Status</th>

            <th>Language</th>

            <th>Submitted At</th>

          </tr>

        </thead>

        <tbody>

          {

            filteredSubmissions.map(
              submission => (

                <tr
                  key={submission.id}
                >

                  <td>
                    {submission.id}
                  </td>

                  <td>
                    {
                      submission.problem
                        ? submission.problem.title
                        : "Unknown"
                    }
                  </td>

                  <td>

                    <span
                      className={`badge ${getBadgeClass(
                        submission.status
                      )}`}
                    >

                      {
                        submission.status
                      }

                    </span>

                  </td>

                  <td>
                    {
                      submission.language
                    }
                  </td>

                  <td>
                    {
                      submission.submittedAt
                    }
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

export default MySubmissions;