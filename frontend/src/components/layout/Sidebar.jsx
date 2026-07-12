import {
  LayoutDashboard,
  Code2,
  FileCode2,
  Trophy,
  Sparkles,
  User,
  ShieldCheck,
  LogOut
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  const menu = [

    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },

    {
      title: "Problems",
      path: "/problems",
      icon: Code2
    },

    {
      title: "Submissions",
      path: "/submissions",
      icon: FileCode2
    },

    {
      title: "Leaderboard",
      path: "/leaderboard",
      icon: Trophy
    },

    {
      title: "Recommendations",
      path: "/recommendations",
      icon: Sparkles
    },

    {
      title: "Profile",
      path: "/profile",
      icon: User
    },

    {
      title: "Admin",
      path: "/admin/problems",
      icon: ShieldCheck
    }

  ];

  return (

    <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-blue-500">

          CodeMentorAI

        </h1>

        <p className="text-zinc-500 mt-2">

          AI Coding Platform

        </p>

      </div>

      <nav className="flex-1 px-5 space-y-2">

        {

          menu.map(item=>{

            const Icon=item.icon;

            return(

              <NavLink

                key={item.path}

                to={item.path}

                className={({isActive})=>

                `

                flex

                items-center

                gap-4

                px-5

                py-4

                rounded-2xl

                transition

                duration-300

                ${

                  isActive

                  ?

                  "bg-blue-600 text-white"

                  :

                  "hover:bg-zinc-900 text-zinc-400 hover:text-white"

                }

                `

                }

              >

                <Icon size={20}/>

                {item.title}

              </NavLink>

            );

          })

        }

      </nav>

      <div className="p-5">

        <button

          onClick={logout}

          className="w-full flex justify-center items-center gap-3 rounded-2xl bg-red-600 hover:bg-red-500 py-4"

        >

          <LogOut size={18}/>

          Logout

        </button>

      </div>

    </aside>

  );

}

export default Sidebar;