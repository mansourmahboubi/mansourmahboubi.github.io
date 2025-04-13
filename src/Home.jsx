const styles = {
  main: {
    height: "100vh",
  },
  mansourImage: {
    width: 200,
  },
  // section:{
  //     height: "33.33%",
  // }
};
function Header() {
  return (
    <header style={styles.section}>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function Body() {
  return (
    <main style={styles.section}>
      <h1>Mansour Mahboubi</h1>
      <img
        style={styles.mansourImage}
        src="assets/img/mansourmahboubi.jpeg"
        alt="Mansour Mahboubi"
        className="profile-picture"
      />
      <section className="welcome-section">
        <h2>Welcome to my personal website!</h2>
        <p></p>
      </section>
    </main>
  );
}
function Footer() {
  return (
    <footer style={styles.section}>
      <p>&copy; 2024 Mansour Mahboubi. All rights reserved.</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com">LinkedIn</a>
        </li>
      </ul>
    </footer>
  );
}
function Home() {
  // eslint-disable-line no-unused-vars
  return (
    <div style={styles.main}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
