import Card from "../ui/Card";
import { CheckCircle2, Clock3 } from "lucide-react";

function RecentSubmissions() {

  const submissions = [

    {
      title: "Two Sum",
      status: "Solved"
    },

    {
      title: "Valid Parentheses",
      status: "Pending"
    }

  ];

  return (

    <Card>

      <h2 className="text-2xl font-bold mb-6">

        Recent Activity

      </h2>

      <div className="space-y-5">

        {

          submissions.map((item,index)=>(

            <div

              key={index}

              className="flex justify-between items-center"

            >

              <div>

                <h3 className="font-semibold">

                  {item.title}

                </h3>

              </div>

              {

                item.status==="Solved"

                ?

                <CheckCircle2 className="text-green-500"/>

                :

                <Clock3 className="text-yellow-500"/>

              }

            </div>

          ))

        }

      </div>

    </Card>

  );

}

export default RecentSubmissions;