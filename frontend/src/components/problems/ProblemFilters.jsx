import Input from "../ui/Input";

function ProblemFilters({

search,

setSearch

}){

return(

<div className="mb-10">

<Input

placeholder="Search any coding problem..."

value={search}

onChange={(e)=>

setSearch(

e.target.value

)

}

/>

</div>

);

}

export default ProblemFilters;