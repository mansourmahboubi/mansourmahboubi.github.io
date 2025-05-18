const theme = "light";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const styles = {
    header: {
      padding: "1rem",
      backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    menuButton: {
      display: "none",
      "@media (max-width: 768px)": {
        display: "block",
        padding: "0.5rem",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        color: theme === "light" ? "#1a1a1a" : "#ffffff",
      },
    },
    navList: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "@media (max-width: 768px)": {
        display: isMenuOpen ? "flex" : "none",
        flexDirection: "column",
        position: "absolute",
        top: "60px",
        left: 0,
        right: 0,
        backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
        padding: "1rem",
      },
    },
    navLink: {
      textDecoration: "none",
      color: theme === "light" ? "#1a1a1a" : "#ffffff",
      fontWeight: "500",
      transition: "color 0.3s ease",
      ":hover": {
        color: "#007bff",
      },
    },
    themeToggle: {
      padding: "0.5rem 1rem",
      backgroundColor: theme === "light" ? "#1a1a1a" : "#ffffff",
      color: theme === "light" ? "#ffffff" : "#1a1a1a",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <button
          style={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul style={styles.navList}>
          <li>
            <a href="#home" style={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
        <button
          style={styles.themeToggle}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
