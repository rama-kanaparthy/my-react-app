import React, { useState } from "react";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="text"
        placeholder="Enter text..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        data-testid="input-field"
      />
      <button type="submit" data-testid="submit-button">Submit</button>
    </form>
  );
};

export default Form;
