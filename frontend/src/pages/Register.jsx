import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Register() {

  const navigate = useNavigate();

  const [name,setName]=useState("");

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const [loading,setLoading]=useState(false);

  const register=async(e)=>{

    e.preventDefault();

    setLoading(true);

    try{

      await api.post(

        "/api/users/register",

        {

          name,

          email,

          password

        }

      );

      alert(

        "Registration Successful"

      );

      navigate("/login");

    }

    catch(error){

      console.log(error);

      alert(

        "Registration Failed"

      );

    }

    finally{

      setLoading(false);

    }

  };

  return(

    <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-8">

      <Card className="w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">

          Create Account

        </h1>

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

              "Creating..."

              :

              "Register"

            }

          </Button>

        </form>

        <p className="text-center mt-8 text-zinc-400">

          Already registered?

          <Link

            to="/login"

            className="text-blue-400 ml-2"

          >

            Login

          </Link>

        </p>

      </Card>

    </div>

  );

}

export default Register;