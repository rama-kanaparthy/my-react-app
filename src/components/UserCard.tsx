import React from "react";

interface UserCardProps {
  name: string;
  age: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div
      data-testid="user-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        background: "#f9f9f9",
        margin: "10px auto",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
