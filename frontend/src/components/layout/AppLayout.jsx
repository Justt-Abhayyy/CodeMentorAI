import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children }) {

  return (

    <div className="flex h-screen bg-zinc-950 text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-8
            bg-gradient-to-br
            from-zinc-950
            via-zinc-900
            to-black
          "
        >

          <div className="max-w-[1700px] mx-auto">

            {children}

          </div>

        </main>

      </div>

    </div>

  );

}

export default AppLayout;