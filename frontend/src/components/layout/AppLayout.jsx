import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import PageContainer from "./PageContainer";

function AppLayout({ children }) {
  return (
    <div
      className="
        flex
        h-screen
        bg-zinc-900
      "
    >
      <Sidebar />

      <div
        className="
          flex
          flex-col
          flex-1
          overflow-hidden
        "
      >
        <Topbar />

        <PageContainer>
          {children}
        </PageContainer>
      </div>
    </div>
  );
}

export default AppLayout;