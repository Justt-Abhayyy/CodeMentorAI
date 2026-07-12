import {
  BookOpen,
  Trophy,
  FileCode2,
  Target
} from "lucide-react";

import StatCard from "../ui/StatCard";

function DashboardStats({ dashboard }) {

  return (

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >

      <StatCard
        title="Problems"
        value={dashboard.totalProblems}
        icon={<BookOpen />}
        color="text-blue-400"
      />

      <StatCard
        title="Solved"
        value={dashboard.solvedProblems}
        icon={<Target />}
        color="text-green-400"
      />

      <StatCard
        title="Submissions"
        value={dashboard.totalSubmissions}
        icon={<FileCode2 />}
        color="text-yellow-400"
      />

      <StatCard
        title="Rank"
        value={`#${dashboard.currentRank}`}
        icon={<Trophy />}
        color="text-purple-400"
      />

    </div>

  );

}

export default DashboardStats;