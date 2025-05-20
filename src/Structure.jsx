const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },
};

const lightTheme = {
  borderColor: "#007bff",
  backgroundColor: "#ffffff",
  color: "#1a1a1a",
};
const darkTheme = {
  borderColor: "#00a8ff",
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
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

  const themeSettings = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isMobile, themeSettings }}
    >
      <div
        style={{
          ...styles.main,
          backgroundColor: themeSettings.backgroundColor,
          color: themeSettings.color,
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
