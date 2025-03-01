// src/App.tsx
import React from "react";
import Header from "./components/Header"; // ✅ Correct Import
import Footer from "./components/Footer";
import UserCard from "./components/UserCard"; 

const users = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Alice Johnson", age: 35 },
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Alice Johnson", age: 35 },
];

function App() {
  return (
    <div>
      <Header />
      <main style={{ textAlign: "center", margin: "50px 0" }}>
        <h1>Welcome to My React App</h1>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
