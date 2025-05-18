const theme = "light";
function Footer() {
  const styles = {
    main: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
      color: theme === "light" ? "#1a1a1a" : "#ffffff",
      transition: "all 0.3s ease",
    },
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
    // navList: {
    //   display: "flex",
    //   gap: "2rem",
    //   listStyle: "none",
    //   margin: 0,
    //   padding: 0,
    //   "@media (max-width: 768px)": {
    //     display: isMenuOpen ? "flex" : "none",
    //     flexDirection: "column",
    //     position: "absolute",
    //     top: "60px",
    //     left: 0,
    //     right: 0,
    //     backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
    //     padding: "1rem",
    //   },
    // },
    navLink: {
      textDecoration: "none",
      color: theme === "light" ? "#1a1a1a" : "#ffffff",
      fontWeight: "500",
      transition: "color 0.3s ease",
      ":hover": {
        color: "#007bff",
      },
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
      textAlign: "center",
    },
    profileImage: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "2rem",
      border: `3px solid ${theme === "light" ? "#007bff" : "#00a8ff"}`,
      "@media (max-width: 768px)": {
        width: "150px",
        height: "150px",
      },
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      "@media (max-width: 768px)": {
        fontSize: "2rem",
      },
    },
    welcomeSection: {
      maxWidth: "800px",
      margin: "2rem auto",
    },
    footer: {
      backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
      padding: "2rem",
      marginTop: "auto",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
      },
    },
    socialLinks: {
      display: "flex",
      gap: "1rem",
      listStyle: "none",
      padding: 0,
    },
    socialLink: {
      textDecoration: "none",
      color: theme === "light" ? "#1a1a1a" : "#ffffff",
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
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p>&copy; 2024 Mansour Mahboubi. All rights reserved.</p>
        <ul style={styles.socialLinks}>
          <li>
            <a
              href="https://www.linkedin.com/in/mansourmahboubi/"
              style={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              style={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
