import { useEffect, useState } from "react";
import api from "../services/api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

function Dashboard() {

  const [dashboard,
    setDashboard] =
    useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard =
    async () => {

      try {

        const response =
          await api.get(
            "/api/dashboard"
          );

        setDashboard(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  if (!dashboard) {

    return (
      <h2 className="m-4">
        Loading...
      </h2>
    );
  }

  const pieData = [

    {
      name: "Solved",
      value:
        dashboard.solvedProblems
    },

    {
      name: "Remaining",
      value:
        dashboard.totalProblems -
        dashboard.solvedProblems
    }

  ];

  const barData = [

    {
      name: "Problems",
      value:
        dashboard.totalProblems
    },

    {
      name: "Submissions",
      value:
        dashboard.totalSubmissions
    },

    {
      name: "Solved",
      value:
        dashboard.solvedProblems
    }

  ];

  return (

    <div
      className="container mt-4"
    >

      <h1
        className="mb-4"
      >
        Dashboard
      </h1>

      <div
        className="row mb-4"
      >

        <div
          className="col-md-3"
        >

          <div
            className="card text-bg-primary shadow"
          >

            <div
              className="card-body"
            >

              <h5>
                Problems
              </h5>

              <h2>
                {
                  dashboard.totalProblems
                }
              </h2>

            </div>

          </div>

        </div>

        <div
          className="col-md-3"
        >

          <div
            className="card text-bg-success shadow"
          >

            <div
              className="card-body"
            >

              <h5>
                Solved
              </h5>

              <h2>
                {
                  dashboard.solvedProblems
                }
              </h2>

            </div>

          </div>

        </div>

        <div
          className="col-md-3"
        >

          <div
            className="card text-bg-warning shadow"
          >

            <div
              className="card-body"
            >

              <h5>
                Submissions
              </h5>

              <h2>
                {
                  dashboard.totalSubmissions
                }
              </h2>

            </div>

          </div>

        </div>

        <div
          className="col-md-3"
        >

          <div
            className="card text-bg-danger shadow"
          >

            <div
              className="card-body"
            >

              <h5>
                Rank
              </h5>

              <h2>
                #
                {
                  dashboard.currentRank
                }
              </h2>

            </div>

          </div>

        </div>

      </div>

      <div
        className="row"
      >

        <div
          className="col-md-6"
        >

          <div
            className="card shadow"
          >

            <div
              className="card-body"
            >

              <h4>
                Solved vs Remaining
              </h4>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >

                    <Cell fill="#198754" />

                    <Cell fill="#dc3545" />

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        <div
          className="col-md-6"
        >

          <div
            className="card shadow"
          >

            <div
              className="card-body"
            >

              <h4>
                Activity Overview
              </h4>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart
                  data={barData}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="name"
                  />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#0d6efd"
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;