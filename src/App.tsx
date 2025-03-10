// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {

  const { theme, toggleTheme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme} style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Toggle Theme
      </button>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </div>
    
  );
};

export default App;

/*
import React from "react";
import Header from "./components/Header"; // ✅ Correct Import
import Footer from "./components/Footer";
import UserCard from "./components/UserCard"; 
import Counter from "./components/Counter";
import Form from "./components/Form";
import UserInputForm from "./components/UserInputForm";

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
      <h1>React Form Example</h1>
      <UserInputForm />
    </div>
    
      /* <div>
        <Header />
        <main style={{ textAlign: "center", margin: "100px 0 50px 0" }}>
          <h2>Fill the Form</h2>
          <Form />
        </main>
        <Footer />
      </div> */
  /* <div>
      <Header />
      <main style={{ textAlign: "center", margin: "100px 0 50px 0" }}>
        <Counter />
      </main>
      <Footer />
    </div> */
    
    /*<div>
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
*/