import {

ArrowRight,

Code2

}

from "lucide-react";

import { Link } from "react-router-dom";

import Card from "../ui/Card";

import Badge from "../ui/Badge";

function ProblemCard({

problem

}){

const difficultyColor={

EASY:"green",

MEDIUM:"yellow",

HARD:"red"

};

return(

<Card>

<div className="flex justify-between">

<div>

<div className="flex items-center gap-3">

<Code2 className="text-blue-500"/>

<h2 className="text-2xl font-bold">

{problem.title}

</h2>

</div>

<p

className="

text-zinc-400

mt-5

line-clamp-2

"

>

{problem.description}

</p>

<div className="flex gap-3 mt-6">

<Badge

color={

difficultyColor[problem.difficulty]

}

>

{problem.difficulty}

</Badge>

<Badge>

{problem.tag}

</Badge>

</div>

</div>

<Link

to={`/problems/${problem.id}`}

className="

self-center

bg-blue-600

hover:bg-blue-500

rounded-2xl

px-5

py-3

transition-all

"

>

<ArrowRight/>

</Link>

</div>

</Card>

);

}

export default ProblemCard;