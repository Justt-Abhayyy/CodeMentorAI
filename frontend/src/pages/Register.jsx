import { useState } from "react";
import api from "../services/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      alert(
        "Registration Successful"
      );

    } catch (error) {

      alert(
        "Registration Failed"
      );
    }
  };

  return (
    <div>

      <h1>Register</h1>

      <form
        onSubmit={handleRegister}
      >

        <input
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />

        <button type="submit">

          Register

        </button>

      </form>

    </div>
  );
}

export default Register;