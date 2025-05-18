const footerStyles = {
  footer: {
    padding: "2rem",
    marginTop: "auto",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerContentMobile: {
    flexDirection: "column",
    gap: "1rem",
    textAlign: "center",
  },
  socialLinks: {
    display: "flex",
    gap: "1rem",
    listStyle: "none",
    padding: 0,
  },
  socialLink: {
    textDecoration: "none",
    transition: "color 0.3s ease",
    ":hover": {
      color: "#007bff",
    },
  },
};

function Footer() {
  const { theme, isMobile } = React.useContext(ThemeContext);

  return (
    <footer
      style={{
        ...footerStyles.footer,
        backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
      }}
    >
      <div
        style={{
          ...footerStyles.footerContent,
          ...(isMobile ? footerStyles.footerContentMobile : {}),
        }}
      >
        <p>&copy; 2024 Mansour Mahboubi. All rights reserved.</p>
        <ul style={footerStyles.socialLinks}>
          <li>
            <a
              href="https://www.linkedin.com/in/mansourmahboubi/"
              style={{
                ...footerStyles.socialLink,
                color: theme === "light" ? "#1a1a1a" : "#ffffff",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              style={{
                ...footerStyles.socialLink,
                color: theme === "light" ? "#1a1a1a" : "#ffffff",
              }}
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
