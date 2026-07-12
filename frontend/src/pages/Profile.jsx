import { useEffect, useState } from "react";

import api from "../services/api";

import Loader from "../components/ui/Loader";

import Card from "../components/ui/Card";

function Profile() {

  const [profile, setProfile] = useState(null);

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response = await api.get("/api/users/me");

      setProfile(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!profile) {

    return <Loader />;

  }

  return (

    <Card className="max-w-xl">

      <h1 className="text-4xl font-bold mb-8">

        My Profile

      </h1>

      <div className="space-y-6">

        <div>

          <h4 className="text-zinc-500">

            Name

          </h4>

          <h2 className="text-2xl">

            {profile.name}

          </h2>

        </div>

        <div>

          <h4 className="text-zinc-500">

            Email

          </h4>

          <h2 className="text-2xl">

            {profile.email}

          </h2>

        </div>

        <div>

          <h4 className="text-zinc-500">

            User ID

          </h4>

          <h2 className="text-2xl">

            {profile.id}

          </h2>

        </div>

      </div>

    </Card>

  );

}

export default Profile;