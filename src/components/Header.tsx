function Header() {
    return (
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#333",
        color: "white",
        padding: "10px 0",
        textAlign: "center",
        zIndex: 1000, // Ensures it's above other content
      }}>
        <h1>My React App</h1>
      </header>
    );
  }
  
  export default Header;
  