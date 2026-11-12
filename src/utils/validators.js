// Pure validation functions. Each returns an error message string,
// or "" when the value is valid. Keeping them pure makes them easy to test.

export const validateName = (v) => {
  const value = v.trim();
  if (!value) return "Full name is required.";
  if (value.length < 3) return "Name must be at least 3 characters.";
  if (!/^[A-Za-z][A-Za-z .'-]*$/.test(value))
    return "Name can only contain letters, spaces, . ' and -.";
  return "";
};

export const validateEmail = (v) => {
  const value = v.trim();
  if (!value) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
    return "Enter a valid email, e.g. name@example.com.";
  return "";
};

export const validatePhone = (v) => {
  const value = v.trim();
  if (!value) return "Phone number is required.";
  if (!/^[6-9]\d{9}$/.test(value))
    return "Enter a 10-digit Indian mobile number starting with 6-9.";
  return "";
};

export const validateAge = (v) => {
  if (v === "" || v === null) return "Age is required.";
  const n = Number(v);
  if (!Number.isInteger(n)) return "Age must be a whole number.";
  if (n < 16 || n > 100) return "Age must be between 16 and 100.";
  return "";
};

export const validatePassword = (v) => {
  if (!v) return "Password is required.";
  if (v.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(v)) return "Add at least one uppercase letter.";
  if (!/[a-z]/.test(v)) return "Add at least one lowercase letter.";
  if (!/\d/.test(v)) return "Add at least one digit.";
  if (!/[^A-Za-z0-9]/.test(v)) return "Add at least one special character.";
  return "";
};

export const validateConfirm = (v, password) => {
  if (!v) return "Please confirm your password.";
  if (v !== password) return "Passwords do not match.";
  return "";
};

export const validateTerms = (checked) =>
  checked ? "" : "You must accept the terms to continue.";

// Returns 0-4, used by the password strength meter.
export const passwordStrength = (v) => {
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v) && /[a-z]/.test(v)) score++;
  if (/\d/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  return score;
};

// Runs every rule against the whole form and returns an errors object.
export const validateForm = (values) => ({
  name: validateName(values.name),
  email: validateEmail(values.email),
  phone: validatePhone(values.phone),
  age: validateAge(values.age),
  password: validatePassword(values.password),
  confirm: validateConfirm(values.confirm, values.password),
  terms: validateTerms(values.terms),
});
