import React from "react";

// Reusable controlled input. Everything it needs comes in through props,
// so the same component renders text, email, tel, number and password fields.
export default function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
  placeholder,
  children, // optional extra UI under the input (e.g. strength meter)
  ...rest
}) {
  const showError = touched && error;
  const showValid = touched && !error;
  const errorId = `${name}-error`;

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={showError ? "true" : "false"}
        aria-describedby={showError ? errorId : undefined}
        className={showError ? "invalid" : showValid ? "valid" : ""}
        {...rest}
      />
      {children}
      {showError && (
        <p id={errorId} className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
