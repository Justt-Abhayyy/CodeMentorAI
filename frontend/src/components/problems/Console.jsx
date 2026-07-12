import Card from "../ui/Card";

function Console({

output

}){

return(

<Card>

<div className="flex justify-between items-center mb-5">

<h2 className="text-xl font-bold">

Console

</h2>

<div className="text-green-400">

Ready

</div>

</div>

<pre

className="

bg-black

rounded-2xl

p-6

text-green-400

min-h-[220px]

overflow-auto

"

>

{

output ||

"Run your solution to see output..."

}

</pre>

</Card>

);

}

export default Console;