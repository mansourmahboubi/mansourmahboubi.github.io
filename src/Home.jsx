// import React, { useState } from 'react';

function Home() {
  const [theme, setTheme] = React.useState("light");
  const styles = {
    main: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
      color: theme === "light" ? "#1a1a1a" : "#ffffff",
      transition: "all 0.3s ease",
    }
  };
  return (
    <div style={styles.main}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
