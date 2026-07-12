import Card from "../ui/Card";

function Console({

output

}){

return(

<Card>

<div className="flex justify-between mb-5">

<h2 className="text-2xl font-bold">

Terminal

</h2>

<span className="text-green-400">

Ready

</span>

</div>

<div

className="

bg-black

rounded-2xl

border

border-zinc-800

p-6

min-h-[250px]

overflow-auto

font-mono

text-green-400

"

>

<pre className="whitespace-pre-wrap">

{

output ||

"Waiting for execution..."

}

</pre>

</div>

</Card>

);

}

export default Console;