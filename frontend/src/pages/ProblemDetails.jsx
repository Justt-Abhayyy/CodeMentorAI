import {

useEffect,

useState

}

from "react";

import {

useParams

}

from "react-router-dom";

import api from "../services/api";

import Button from "../components/ui/Button";

import Badge from "../components/ui/Badge";

import Loader from "../components/ui/Loader";

import CodeEditor from "../components/problems/CodeEditor";

import Console from "../components/problems/Console";

import TestCasePanel from "../components/problems/TestCasePanel";

function ProblemDetails(){

const{

id

}=

useParams();

const[

problem,

setProblem

]=

useState(null);

const[

code,

setCode

]=

useState(

`public class Main {

    public static void main(String[] args){

        

    }

}`

);

const[

language

]=

useState(

"Java"

);

const[

output,

setOutput

]=

useState("");

useEffect(()=>{

loadProblem();

},[]);

const loadProblem=

async()=>{

try{

const response=

await api.get(

`/api/problems/${id}`

);

setProblem(

response.data

);

}

catch(error){

console.log(error);

}

};

const runCode=

async()=>{

try{

const response=

await api.post(

"/api/compiler/run",

{

language,

code

}

);

setOutput(

response.data.output

);

}

catch(error){

console.log(error);

setOutput(

"Compilation Failed."

);

}

};

const submitCode=

async()=>{

try{

await api.post(

`/api/submissions/${id}`,

{

code,

language,

status:"PENDING"

}

);

alert(

"Solution Submitted!"

);

}

catch(error){

console.log(error);

}

};

if(!problem){

return<Loader/>;

}

return(

<div className="space-y-8">

<div>

<h1 className="text-4xl font-bold">

{problem.title}

</h1>

<div className="flex gap-3 mt-4">

<Badge color="green">

{problem.difficulty}

</Badge>

<Badge color="blue">

{problem.tag}

</Badge>

</div>

<p className="mt-8 text-zinc-300 leading-8">

{problem.description}

</p>

</div>

<div className="grid grid-cols-2 gap-8">

<div>

<TestCasePanel/>

</div>

<div>

<CodeEditor

language={language}

code={code}

setCode={setCode}

/>

<div className="flex gap-4 mt-6">

<Button

onClick={runCode}

>

Run Code

</Button>

<Button

variant="success"

onClick={submitCode}

>

Submit

</Button>

</div>

</div>

</div>

<Console

output={output}

/>

</div>

);

}

export default ProblemDetails;