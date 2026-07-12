import Card from "../ui/Card";

import {

BookOpen,

CheckCircle,

FileCode,

Trophy

}

from "lucide-react";

function DashboardStats({

dashboard

}){

const stats=[

{

title:"Problems",

value:dashboard.totalProblems,

icon:BookOpen,

color:"text-blue-500"

},

{

title:"Solved",

value:dashboard.solvedProblems,

icon:CheckCircle,

color:"text-green-500"

},

{

title:"Submissions",

value:dashboard.totalSubmissions,

icon:FileCode,

color:"text-yellow-500"

},

{

title:"Rank",

value:"#"+dashboard.currentRank,

icon:Trophy,

color:"text-purple-500"

}

];

return(

<div

className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"

>

{

stats.map((item,index)=>{

const Icon=item.icon;

return(

<Card

key={index}

>

<div className="flex justify-between items-center">

<div>

<p className="text-zinc-500">

{item.title}

</p>

<h2 className="text-4xl font-bold mt-3">

{item.value}

</h2>

</div>

<div

className={`

w-14

h-14

rounded-2xl

bg-zinc-800

flex

items-center

justify-center

${item.color}

`}

>

<Icon size={28}/>

</div>

</div>

</Card>

);

})

}

</div>

);

}

export default DashboardStats;