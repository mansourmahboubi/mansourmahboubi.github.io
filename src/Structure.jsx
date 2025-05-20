const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },
};

function Structure({ children }) {
  // read from local storage
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
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
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
