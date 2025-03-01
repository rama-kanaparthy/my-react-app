// src/App.tsx
import React from "react";
import Header from "./components/Header"; // ✅ Correct Import
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to My First React App</h1>
        <p>Learning React with Vite is fast and fun! 🚀</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
