import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {

  const [profile, setProfile] =
    useState(null);

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response =
        await api.get(
          "/api/users/me"
        );

      setProfile(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  if (!profile) {

    return <h2>Loading...</h2>;
  }

  return (

    <div>

      <h1>Profile</h1>

      <p>ID: {profile.id}</p>

      <p>Name: {profile.name}</p>

      <p>Email: {profile.email}</p>

    </div>
  );
}

export default Profile;