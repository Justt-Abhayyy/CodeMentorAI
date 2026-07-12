import Card from "../ui/Card";

function TestCasePanel(){

return(

<Card>

<h2 className="text-xl font-bold mb-5">

Custom Input

</h2>

<textarea

rows={10}

className="

w-full

rounded-2xl

bg-zinc-950

border

border-zinc-700

outline-none

resize-none

p-5

"

placeholder="Example:

5

1 2 3 4 5"

/>

</Card>

);

}

export default TestCasePanel;