import { useEffect, useState } from "react";
import api from "../services/api";

function MySubmissions() {

  const [submissions, setSubmissions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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

    } finally {

      setLoading(false);
    }
  };

  if (loading) {

    return <h2>Loading...</h2>;
  }

  return (

    <div>

      <h1>My Submissions</h1>

      {

        submissions.length === 0 ?

          (

            <p>
              No submissions found.
            </p>

          )

          :

          (

            <table border="1">

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

                  submissions.map(
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
                              : "Unknown Problem"
                          }
                        </td>

                        <td>
                          {submission.status}
                        </td>

                        <td>
                          {
                            submission.language
                              ? submission.language
                              : "N/A"
                          }
                        </td>

                        <td>
                          {submission.submittedAt}
                        </td>

                      </tr>

                    )
                  )

                }

              </tbody>

            </table>

          )

      }

    </div>
  );
}

export default MySubmissions;