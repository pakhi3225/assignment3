import React, { useState } from "react";
import FormField from "./FormField.jsx";
import CheckboxField from "./CheckboxField.jsx";
import PasswordStrength from "./PasswordStrength.jsx";
import SuccessCard from "./SuccessCard.jsx";
import useFormValidation from "../hooks/useFormValidation.js";

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  age: "",
  password: "",
  confirm: "",
  terms: false,
};

export default function RegistrationForm() {
  const { values, errors, touched, isValid, handleChange, handleBlur, reset } =
    useFormValidation(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return; // safety net; the button is already disabled
    setSubmitted({ name: values.name.trim(), email: values.email.trim() });
  };

  const handleReset = () => {
    reset();
    setSubmitted(null);
  };

  if (submitted) return <SuccessCard user={submitted} onReset={handleReset} />;

  // Props shared by every field: value, error, touched flag and handlers.
  const bind = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    touched: touched[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  const invalidCount = Object.values(errors).filter(Boolean).length;

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h1>Create your account</h1>
      <p className="sub">Fields are validated as you type.</p>

      <FormField
        label="Full name"
        placeholder="Abhishek Patil"
        autoComplete="name"
        {...bind("name")}
      />
      <FormField
        label="Email"
        type="email"
        placeholder="name@example.com"
        autoComplete="email"
        {...bind("email")}
      />
      <div className="row">
        <FormField
          label="Phone"
          type="tel"
          placeholder="9876543210"
          maxLength={10}
          inputMode="numeric"
          {...bind("phone")}
        />
        <FormField
          label="Age"
          type="number"
          placeholder="21"
          min={0}
          {...bind("age")}
        />
      </div>
      <FormField
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="Min 8 chars, Aa1@"
        autoComplete="new-password"
        {...bind("password")}
      >
        <PasswordStrength password={values.password} />
      </FormField>
      <FormField
        label="Confirm password"
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter password"
        autoComplete="new-password"
        {...bind("confirm")}
      />

      <label className="show-pw">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => setShowPassword(e.target.checked)}
        />
        Show passwords
      </label>

      <CheckboxField
        label="I accept the terms and conditions"
        {...{
          name: "terms",
          checked: values.terms,
          error: errors.terms,
          touched: touched.terms,
          onChange: handleChange,
          onBlur: handleBlur,
        }}
      />

      <button type="submit" disabled={!isValid}>
        Register
      </button>
      {!isValid && (
        <p className="hint">
          {invalidCount} field{invalidCount > 1 ? "s" : ""} still need
          attention.
        </p>
      )}
    </form>
  );
}
