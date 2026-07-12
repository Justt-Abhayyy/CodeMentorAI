import {

  ResponsiveContainer,

  PieChart,

  Pie,

  Tooltip,

  Cell

} from "recharts";

function ProblemsSolvedChart({

  dashboard

}) {

  const data = [

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

  return (

    <ResponsiveContainer

      width="100%"

      height={350}

    >

      <PieChart>

        <Pie

          data={data}

          dataKey="value"

          outerRadius={120}

          label

        >

          <Cell fill="#22C55E" />

          <Cell fill="#EF4444" />

        </Pie>

        <Tooltip />

      </PieChart>

    </ResponsiveContainer>

  );

}

export default ProblemsSolvedChart;