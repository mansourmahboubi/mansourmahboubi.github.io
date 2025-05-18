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
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isMobile }}>
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
    </ThemeContext.Provider>
  );
}
