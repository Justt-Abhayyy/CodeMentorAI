import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const register = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await api.post("/api/users/register", {

        name,

        email,

        password

      });

      toast.success("Registration Successful!");

      navigate("/login");

    }

    catch (error) {

      console.log(error);

      toast.error("Registration Failed.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-zinc-950 flex justify-center items-center px-6">

      <Card className="w-full max-w-md">

        <h1 className="text-4xl font-bold mb-2">

          Create Account

        </h1>

        <p className="text-zinc-400 mb-8">

          Join CodeMentorAI

        </p>

        <form
          onSubmit={register}
          className="space-y-5"
        >

          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button
            className="w-full"
            disabled={loading}
          >

            {

              loading

                ?

                "Creating Account..."

                :

                "Register"

            }

          </Button>

        </form>

        <p className="mt-8 text-center text-zinc-400">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-500 ml-2 hover:underline"
          >

            Login

          </Link>

        </p>

      </Card>

    </div>

  );

}

export default Register;