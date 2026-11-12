import React from "react";

// Reusable controlled checkbox with the same error pattern as FormField.
export default function CheckboxField({
  label,
  name,
  checked,
  error,
  touched,
  onChange,
  onBlur,
}) {
  const showError = touched && error;
  return (
    <div className="field checkbox">
      <label htmlFor={name}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={showError ? "true" : "false"}
        />
        <span>{label}</span>
      </label>
      {showError && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
