import { useEffect, useState } from "react";

import api from "../services/api";

import Loader from "../components/ui/Loader";

import Card from "../components/ui/Card";

function MySubmissions() {

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadSubmissions();

  }, []);

  const loadSubmissions = async () => {

    try {

      const response = await api.get(
        "/api/submissions/my"
      );

      setSubmissions(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <Loader />;

  }

  return (

    <div className="space-y-8">

      <h1 className="text-4xl font-bold">

        My Submissions

      </h1>

      {

        submissions.map(submission => (

          <Card key={submission.id}>

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-semibold">

                  {

                    submission.problem
                      ? submission.problem.title
                      : "Unknown Problem"

                  }

                </h2>

                <p className="text-zinc-400 mt-2">

                  {submission.language}

                </p>

              </div>

              <div className="text-right">

                <h3 className="text-green-400">

                  {submission.status}

                </h3>

                <p className="text-zinc-500 text-sm">

                  {submission.submittedAt}

                </p>

              </div>

            </div>

          </Card>

        ))

      }

    </div>

  );

}

export default MySubmissions;