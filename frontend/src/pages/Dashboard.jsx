import { useEffect, useState } from "react";

import api from "../services/api";

import Loader from "../components/ui/Loader";

import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";
import RecentSubmissions from "../components/dashboard/RecentSubmissions";
import ActivityCard from "../components/dashboard/ActivityCard";

import ProblemsSolvedChart from "../components/charts/ProblemsSolvedChart";
import LanguageChart from "../components/charts/LanguageChart";

import Card from "../components/ui/Card";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const response =
        await api.get("/api/dashboard");

      setDashboard(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  if (!dashboard) {

    return <Loader />;

  }

  return (

    <div className="space-y-10">

      <div>

        <h1 className="text-5xl font-bold">

          Dashboard

        </h1>

        <p className="text-zinc-500 mt-3">

          Welcome back. Here's your coding progress.

        </p>

      </div>

      <DashboardStats dashboard={dashboard} />

      <QuickActions />

      <div className="grid xl:grid-cols-2 gap-8">

        <Card>

          <h2 className="text-2xl font-bold mb-6">

            Problems Solved

          </h2>

          <ProblemsSolvedChart dashboard={dashboard} />

        </Card>

        <Card>

          <h2 className="text-2xl font-bold mb-6">

            Languages Used

          </h2>

          <LanguageChart />

        </Card>

      </div>

      <div className="grid xl:grid-cols-2 gap-8">

        <RecentSubmissions />

        <ActivityCard />

      </div>

    </div>

  );

}

export default Dashboard;