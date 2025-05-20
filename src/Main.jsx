const mainStyles = {
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
        Mansour Mahboubi
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
        <h2>Welcome to my personal website!</h2>
        <p>I'm a software developer with a passion for open source.</p>
      </section>
    </main>
  );
}
