function Souvenir() {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      maxHeight: "100vh",
      overflowY: "auto",
    },
    header: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.2rem",
      color: "#7f8c8d",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      padding: "1rem",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "1.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      ":hover": {
        transform: "translateY(-5px)",
      },
    },
    itemTitle: {
      fontSize: "1.5rem",
      color: "#e67e22",
      marginBottom: "1rem",
    },
    description: {
      color: "#34495e",
      lineHeight: "1.6",
    },
  };

  const items = [
    {
      name: "Gaz",
      description:
        "A traditional Persian nougat made from the sap of the angebin plant, mixed with rosewater, pistachios, and other nuts.",
    },
    {
      name: "Sohan",
      description:
        "A traditional Persian saffron brittle toffee made with wheat sprout, egg yolks, rosewater, sugar, and nuts.",
    },
    {
      name: "Baslogh",
      description:
        "A soft and chewy confection made from starch and sugar, often flavored with rosewater or other traditional essences.",
    },
    {
      name: "Koloucheh Lahijan",
      description:
        "A traditional cookie from Lahijan, famous for its delicate texture and rich filling of ground walnuts, cinnamon, and cardamom. Known as one of Gilan province's most beloved sweets.",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Traditional Iranian Delicacies</h1>
        <p style={styles.subtitle}>
          Discover the authentic taste of Persian sweets and souvenirs
        </p>
      </header>

      <div style={styles.grid}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ ...styles.card, ...styles.cardHover }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h2 style={styles.itemTitle}>{item.name}</h2>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
