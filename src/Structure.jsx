const lightTheme = {
  borderColor: "#4f46e5",
  backgroundColor: "#ffffff",
  color: "#1e293b",
};
const darkTheme = {
  borderColor: "#818cf8",
  backgroundColor: "#0f172a",
  color: "#f8fafc",
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
        className={`min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          theme === "light"
            ? "bg-white text-slate-800 border-indigo-600"
            : "bg-slate-900 text-slate-50 border-indigo-400"
        }`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
