import {

  useEffect,

  useState

} from "react";

import api from "../services/api";

import Loader from "../components/ui/Loader";

import ProblemCard from "../components/problems/ProblemCard";

import ProblemFilters from "../components/problems/ProblemFilters";

function Problems() {

  const [

    problems,

    setProblems

  ] =

  useState([]);

  const [

    filtered,

    setFiltered

  ] =

  useState([]);

  const [

    search,

    setSearch

  ] =

  useState("");

  const [

    loading,

    setLoading

  ] =

  useState(true);

  useEffect(() => {

    loadProblems();

  }, []);

  useEffect(() => {

    const result =

      problems.filter(

        problem =>

          problem.title

            .toLowerCase()

            .includes(

              search.toLowerCase()

            )

      );

    setFiltered(result);

  }, [

    search,

    problems

  ]);

  const loadProblems = async () => {

    try {

      const response =

        await api.get(

          "/api/problems"

        );

      setProblems(

        response.data

      );

      setFiltered(

        response.data

      );

    }

    catch(error){

      console.log(error);

    }

    finally{

      setLoading(false);

    }

  };

  if(loading){

    return <Loader/>;

  }

  return(

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Problems

        </h1>

        <p className="text-zinc-400 mt-2">

          Solve coding problems and improve your skills.

        </p>

      </div>

      <ProblemFilters

        search={search}

        setSearch={setSearch}

      />

      <div className="grid gap-6">

        {

          filtered.map(

            problem=>(

              <ProblemCard

                key={problem.id}

                problem={problem}

              />

            )

          )

        }

      </div>

    </div>

  );

}

export default Problems;