import { useEffect, useState } from "react";

import api from "../services/api";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Loader from "../components/ui/Loader";

function AdminProblems() {

  const [problems,setProblems]=useState([]);

  const [loading,setLoading]=useState(true);

  const [title,setTitle]=useState("");

  const [description,setDescription]=useState("");

  const [difficulty,setDifficulty]=useState("EASY");

  const [tag,setTag]=useState("ARRAYS");

  useEffect(()=>{

    loadProblems();

  },[]);

  const loadProblems=async()=>{

    try{

      const response=

      await api.get(

        "/api/problems"

      );

      setProblems(

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

  const addProblem=async()=>{

    try{

      await api.post(

        "/api/problems",

        {

          title,

          description,

          difficulty,

          tag

        }

      );

      setTitle("");

      setDescription("");

      loadProblems();

    }

    catch(error){

      console.log(error);

    }

  };

  const deleteProblem=async(id)=>{

    try{

      await api.delete(

        `/api/problems/${id}`

      );

      loadProblems();

    }

    catch(error){

      console.log(error);

    }

  };

  if(loading){

    return<Loader/>;

  }

  return(

    <div className="space-y-8">

      <h1 className="text-4xl font-bold">

        Admin Panel

      </h1>

      <Card>

        <div className="space-y-4">

          <Input

            placeholder="Problem Title"

            value={title}

            onChange={(e)=>setTitle(e.target.value)}

          />

          <textarea

            className="w-full rounded-2xl bg-zinc-900 border border-zinc-700 p-4"

            rows="6"

            placeholder="Description"

            value={description}

            onChange={(e)=>setDescription(e.target.value)}

          />

          <div className="grid grid-cols-2 gap-4">

            <select

              value={difficulty}

              onChange={(e)=>setDifficulty(e.target.value)}

              className="rounded-2xl bg-zinc-900 border border-zinc-700 p-4"

            >

              <option>EASY</option>

              <option>MEDIUM</option>

              <option>HARD</option>

            </select>

            <select

              value={tag}

              onChange={(e)=>setTag(e.target.value)}

              className="rounded-2xl bg-zinc-900 border border-zinc-700 p-4"

            >

              <option>ARRAYS</option>

              <option>STRINGS</option>

              <option>TREES</option>

              <option>GRAPHS</option>

              <option>DP</option>

            </select>

          </div>

          <Button onClick={addProblem}>

            Add Problem

          </Button>

        </div>

      </Card>

      <div className="space-y-4">

        {

          problems.map(problem=>(

            <Card key={problem.id}>

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-xl font-semibold">

                    {problem.title}

                  </h2>

                  <div className="flex gap-3 mt-3">

                    <Badge color="green">

                      {problem.difficulty}

                    </Badge>

                    <Badge>

                      {problem.tag}

                    </Badge>

                  </div>

                </div>

                <Button

                  variant="danger"

                  onClick={()=>deleteProblem(problem.id)}

                >

                  Delete

                </Button>

              </div>

            </Card>

          ))

        }

      </div>

    </div>

  );

}

export default AdminProblems;