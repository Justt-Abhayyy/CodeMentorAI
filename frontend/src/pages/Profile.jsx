import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {

  const [profile, setProfile] =
    useState(null);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response =
        await api.get(
          "/api/users/me"
        );

      setProfile(
        response.data
      );

      setName(
        response.data.name
      );

      setEmail(
        response.data.email
      );

    } catch (error) {

      console.log(error);
    }
  };

  const updateProfile = async () => {

    try {

      const response =
        await api.put(
          "/api/users/me",
          {
            name,
            email
          }
        );

      setProfile(
        response.data
      );

      alert(
        "Profile updated successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Profile update failed"
      );
    }
  };

  if (!profile) {

    return <h2>Loading...</h2>;
  }

  return (

    <div>

      <h1>Profile</h1>

      <p>
        ID: {profile.id}
      </p>

      <br />

      <label>
        Name
      </label>

      <br />

      <input
        type="text"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <label>
        Email
      </label>

      <br />

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={updateProfile}
      >
        Save Changes
      </button>

    </div>
  );
}

export default Profile;