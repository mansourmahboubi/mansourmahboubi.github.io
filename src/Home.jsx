const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },
};
function Home() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div
      style={{
        ...styles.main,
        backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
        color: theme === "light" ? "#1a1a1a" : "#ffffff",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
