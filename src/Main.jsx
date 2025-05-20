const mainStyles = {
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "2rem",
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
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  headingMobile: {
    fontSize: "2rem",
  },
  welcomeSection: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "0 2rem",
  },
  welcomeHeading: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  welcomeText: {
    fontSize: "1.125rem",
    lineHeight: "1.75",
    marginBottom: "1.5rem",
    color: "inherit",
    opacity: 0.8,
  },
};
function Main() {
  const { themeSettings, isMobile } = React.useContext(ThemeContext);
  return (
    <main style={mainStyles.mainContent}>
      <h1
        style={{
          ...mainStyles.heading,
          ...(isMobile ? mainStyles.headingMobile : {}),
        }}
      >
        Hi, I'm Mansour 👋
      </h1>
      <img
        style={{
          ...mainStyles.profileImage,
          border: `3px solid ${themeSettings.borderColor}`,
        }}
        src="assets/img/mansourmahboubi.jpeg"
        alt="Mansour Mahboubi"
      />
      <section style={mainStyles.welcomeSection}>
        <p style={mainStyles.welcomeText}>
          I'm an IT engineer with a bachelor's degree from the University of
          Tehran. My journey in technology began with a deep passion for
          GNU/Linux and Open Source software, which laid the foundation for my
          professional career. Over the years, I've gained extensive experience
          across diverse sectors including FinTech, EdTech, and LegalTech,
          working on innovative solutions that bridge technology with real-world
          applications.
        </p>
      </section>
    </main>
  );
}
