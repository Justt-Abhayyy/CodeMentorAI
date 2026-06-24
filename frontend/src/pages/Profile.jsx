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

      setProfile(
        response.data
      );

    } catch (error) {

      console.log(error);
    }
  };

  if (!profile) {

    return (
      <h2 className="m-4">
        Loading...
      </h2>
    );
  }

  return (

    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-body">

          <h2>
            User Profile
          </h2>

          <hr />

          <h5>
            ID:
            {" "}
            {profile.id}
          </h5>

          <h5>
            Name:
            {" "}
            {profile.name}
          </h5>

          <h5>
            Email:
            {" "}
            {profile.email}
          </h5>

        </div>

      </div>

    </div>
  );
}

export default Profile;