import {

  useEffect,

  useState

} from "react";

import {

  useParams

} from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";

import Badge from "../components/ui/Badge";

import Button from "../components/ui/Button";

import Loader from "../components/ui/Loader";

import CodeEditor from "../components/problems/CodeEditor";

import Console from "../components/problems/Console";

import TestCasePanel from "../components/problems/TestCasePanel";

import AIReviewPanel from "../components/ai/AIReviewPanel";

function ProblemDetails() {

  const { id } = useParams();

  const [

    problem,

    setProblem

  ] = useState(null);

  const [

    language

  ] = useState("Java");

  const [

    code,

    setCode

  ] = useState(`public class Main {

    public static void main(String[] args){

        

    }

}`);

  const [

    output,

    setOutput

  ] = useState("");

  useEffect(() => {

    loadProblem();

  }, []);

  const loadProblem = async () => {

    try {

      const response = await api.get(

        `/api/problems/${id}`

      );

      setProblem(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const runCode = async () => {

    try {

      toast.loading(

        "Running Code...",

        {

          id: "run"

        }

      );

      const response = await api.post(

        "/api/code/run",

        {

          language,

          code

        }

      );

      toast.success(

        "Execution Complete",

        {

          id: "run"

        }

      );

      setOutput(

        response.data.output

      );

    }

    catch (error) {

      console.log(error);

      toast.error(

        "Compilation Failed",

        {

          id: "run"

        }

      );

      setOutput("Compilation Failed.");

    }

  };

  const submitCode = async () => {

    try {

      await api.post(

        `/api/submissions/${id}`,

        {

          code,

          language,

          status: "PENDING"

        }

      );

      toast.success(

        "Solution Submitted Successfully"

      );

    }

    catch (error) {

      console.log(error);

      toast.error(

        "Submission Failed"

      );

    }

  };

  if (!problem) {

    return <Loader />;

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          {problem.title}

        </h1>

        <div className="flex gap-3 mt-4">

          <Badge color="green">

            {problem.difficulty}

          </Badge>

          <Badge>

            {problem.tag}

          </Badge>

        </div>

        <p className="mt-6 text-zinc-300 leading-8">

          {problem.description}

        </p>

      </div>

      <div className="grid xl:grid-cols-2 gap-8">

        <div className="space-y-6">

          <TestCasePanel />

          <Console output={output} />

        </div>

        <div className="space-y-6">

          <CodeEditor

            language={language}

            code={code}

            setCode={setCode}

          />

          <div className="flex gap-4">

            <Button onClick={runCode}>

              ▶ Run Code

            </Button>

            <Button

              variant="success"

              onClick={submitCode}

            >

              ✓ Submit

            </Button>

          </div>

        </div>

      </div>

      <AIReviewPanel

        code={code}

        language={language}

      />

    </div>

  );

}

export default ProblemDetails;