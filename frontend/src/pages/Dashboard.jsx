import { useEffect, useState } from "react";

import api from "../services/api";

import DashboardStats from "../components/dashboard/DashboardStats";
import ActivityCard from "../components/dashboard/ActivityCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentSubmissions from "../components/dashboard/RecentSubmissions";

import ProblemsSolvedChart from "../components/charts/ProblemsSolvedChart";
import LanguageChart from "../components/charts/LanguageChart";

import Card from "../components/ui/Card";
import Loader from "../components/ui/Loader";

function Dashboard() {

  const [dashboard, setDashboard] =
    useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

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

    return <Loader />;

  }

  return (

    <div
      className="
        space-y-8
      "
    >

      <div>

        <h1
          className="
            text-4xl
            font-bold
          "
        >

          Welcome Back 👋

        </h1>

        <p
          className="
            text-zinc-400
            mt-2
          "
        >

          Track your coding journey.

        </p>

      </div>

      <DashboardStats
        dashboard={dashboard}
      />

      <QuickActions />

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        <Card>

          <h2
            className="
              text-xl
              mb-6
              font-semibold
            "
          >

            Problems Solved

          </h2>

          <ProblemsSolvedChart
            dashboard={dashboard}
          />

        </Card>

        <Card>

          <h2
            className="
              text-xl
              mb-6
              font-semibold
            "
          >

            Languages

          </h2>

          <LanguageChart />

        </Card>

      </div>

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        <RecentSubmissions />

        <ActivityCard />

      </div>

    </div>

  );

}

export default Dashboard;