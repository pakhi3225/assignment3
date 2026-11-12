import React from "react";
import { passwordStrength } from "../utils/validators.js";

const LABELS = ["Too weak", "Weak", "Fair", "Good", "Strong"];

export default function PasswordStrength({ password }) {
  if (!password) return null;
  const score = passwordStrength(password);
  return (
    <div className="strength" aria-live="polite">
      <div className="strength-bars">
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className={n <= score ? `bar on level-${score}` : "bar"} />
        ))}
      </div>
      <small>Strength: {LABELS[score]}</small>
    </div>
  );
}
