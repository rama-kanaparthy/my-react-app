import { useState } from "react";

const UserInputForm = () => {
  const [input, setInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedText(input);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
      </form>
      {submittedText && <p>Submitted: {submittedText}</p>}
    </div>
  );
};

export default UserInputForm;
