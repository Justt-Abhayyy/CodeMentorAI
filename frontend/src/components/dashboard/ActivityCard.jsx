import Card from "../ui/Card";

import {

TrendingUp,

Code2,

BrainCircuit

}

from "lucide-react";

function ActivityCard(){

return(

<Card>

<h2 className="text-2xl font-bold mb-6">

Today's Progress

</h2>

<div className="space-y-6">

<div className="flex items-center gap-4">

<TrendingUp className="text-blue-500"/>

<div>

<h3>Problems Solved</h3>

<p className="text-zinc-500">

12 this week

</p>

</div>

</div>

<div className="flex items-center gap-4">

<Code2 className="text-green-500"/>

<div>

<h3>Code Submitted</h3>

<p className="text-zinc-500">

18 submissions

</p>

</div>

</div>

<div className="flex items-center gap-4">

<BrainCircuit className="text-purple-500"/>

<div>

<h3>AI Suggestions</h3>

<p className="text-zinc-500">

Ready

</p>

</div>

</div>

</div>

</Card>

);

}

export default ActivityCard;