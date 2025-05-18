const headerStyles = {
  header: {
    padding: "1rem",
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
    "@media (maxWidth: 768px)": {
      display: "block",
      padding: "0.5rem",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
  },
  navList: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    "@media (maxWidth: 768px)": {
      flexDirection: "column",
      position: "absolute",
      top: "60px",
      left: 0,
      right: 0,
      padding: "1rem",
    },
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
    ":hover": {
      color: "#007bff",
    },
  },
  themeToggle: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      style={{
        ...headerStyles.header,
        backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
      }}
    >
      <nav style={headerStyles.nav}>
        <button
          style={{
            ...headerStyles.menuButton,
            "@media (max-width: 768px)": {
              color: theme === "light" ? "#1a1a1a" : "#ffffff",
            },
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          style={{
            ...headerStyles.navList,
            "@media (maxWidth: 768px)": {
              backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
              display: isMenuOpen ? "flex" : "none",
            },
          }}
        >
          <li>
            <a
              href="#home"
              style={{
                ...headerStyles.navLink,
                color: theme === "light" ? "#1a1a1a" : "#ffffff",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                ...headerStyles.navLink,
                color: theme === "light" ? "#1a1a1a" : "#ffffff",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                ...headerStyles.navLink,
                color: theme === "light" ? "#1a1a1a" : "#ffffff",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          style={{
            ...headerStyles.themeToggle,
            backgroundColor: theme === "light" ? "#1a1a1a" : "#ffffff",
            color: theme === "light" ? "#ffffff" : "#1a1a1a",
          }}
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
