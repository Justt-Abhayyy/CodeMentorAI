import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import api from "../services/api";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post(

        "/api/users/login",

        {

          email,

          password

        }

      );

      if (response.data.token) {

        localStorage.setItem(

          "token",

          response.data.token

        );

        navigate("/dashboard");

      }

    }

    catch (error) {

      console.log(error);

      alert("Invalid email or password.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-zinc-950 flex justify-center items-center p-8">

      <Card className="w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">

          Welcome Back 👋

        </h1>

        <form

          onSubmit={handleLogin}

          className="space-y-5"

        >

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

              "Signing In..."

              :

              "Login"

            }

          </Button>

        </form>

        <p className="mt-8 text-center text-zinc-400">

          Don't have an account?

          <Link

            to="/register"

            className="text-blue-400 ml-2"

          >

            Register

          </Link>

        </p>

      </Card>

    </div>

  );

}

export default Login;