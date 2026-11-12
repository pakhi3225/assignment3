import React from "react";

export default function SuccessCard({ user, onReset }) {
  return (
    <div className="card success" role="status">
      <div className="tick">&#10003;</div>
      <h2>Registration successful</h2>
      <p>
        Welcome, <strong>{user.name}</strong>! A confirmation would be sent to{" "}
        <strong>{user.email}</strong>.
      </p>
      <button type="button" onClick={onReset}>
        Register another user
      </button>
    </div>
  );
}
