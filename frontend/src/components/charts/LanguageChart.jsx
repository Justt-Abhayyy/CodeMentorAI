import {

  ResponsiveContainer,

  BarChart,

  XAxis,

  YAxis,

  CartesianGrid,

  Tooltip,

  Bar

} from "recharts";

function LanguageChart() {

  const data = [

    {

      language: "Java",

      solved: 12

    },

    {

      language: "Python",

      solved: 0

    },

    {

      language: "C++",

      solved: 0

    }

  ];

  return (

    <ResponsiveContainer

      width="100%"

      height={350}

    >

      <BarChart

        data={data}

      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="language" />

        <YAxis />

        <Tooltip />

        <Bar

          dataKey="solved"

          fill="#3B82F6"

        />

      </BarChart>

    </ResponsiveContainer>

  );

}

export default LanguageChart;