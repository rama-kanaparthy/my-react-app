// src/App.tsx
import React from "react";
import Header from "./components/Header"; // ✅ Correct Import
import Footer from "./components/Footer";
import UserCard from "./components/UserCard"; 

function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", margin: "50px 0" }}>
        <h1>Welcome to My React App</h1>
        <UserCard name="John Doe" age={30} />
        <UserCard name="Jane Smith" age={25} />
        <UserCard name="John Doe" age={30} />
        <UserCard name="Jane Smith" age={25} />
        <UserCard name="John Doe" age={30} />
        <UserCard name="Jane Smith" age={25} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
