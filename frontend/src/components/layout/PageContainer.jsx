function PageContainer({ children }) {
  return (
    <main
      className="
        flex-1
        overflow-auto
        bg-zinc-900
        p-8
      "
    >
      {children}
    </main>
  );
}

export default PageContainer;