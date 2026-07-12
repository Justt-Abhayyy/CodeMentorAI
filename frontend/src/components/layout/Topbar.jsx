import { useEffect, useState } from "react";

import {
  Bell,
  Search,
  UserCircle
} from "lucide-react";

import api from "../../services/api";

function Topbar() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    loadProfile();

  }, []);

  const loadProfile = async () => {

    try {

      const response =
        await api.get("/api/users/me");

      setUser(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <header
      className="
        h-20
        border-b
        border-zinc-800
        bg-zinc-950
        px-8
        flex
        items-center
        justify-between
      "
    >

      <div
        className="
          flex
          items-center
          bg-zinc-900
          rounded-2xl
          px-5
          py-3
          w-[420px]
        "
      >

        <Search
          size={18}
          className="text-zinc-500"
        />

        <input

          placeholder="Search problems..."

          className="
            bg-transparent
            ml-4
            outline-none
            w-full
            text-white
          "

        />

      </div>

      <div className="flex items-center gap-8">

        <button
          className="
            hover:text-blue-500
            transition
          "
        >

          <Bell size={22} />

        </button>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <UserCircle
            size={48}
            className="text-blue-500"
          />

          <div>

            <h3
              className="
                font-semibold
                text-lg
              "
            >

              {

                user

                  ?

                  user.name

                  :

                  "Loading..."

              }

            </h3>

            <p
              className="
                text-zinc-500
                text-sm
              "
            >

              {

                user

                  ?

                  user.email

                  :

                  ""

              }

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Topbar;