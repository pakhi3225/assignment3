import { useState, useEffect, useCallback } from "react";
import { validateForm } from "../utils/validators.js";

// Custom hook: owns the form values, touched flags and error messages.
// - values:  controlled input state (useState)
// - touched: which fields the user has interacted with (so errors are not
//            shown before the user has had a chance to type)
// - errors:  recomputed in useEffect every time the values change, which
//            gives real-time validation
export default function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState(() => validateForm(initialValues));

  useEffect(() => {
    setErrors(validateForm(values));
  }, [values]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({});
  }, [initialValues]);

  const isValid = Object.values(errors).every((msg) => msg === "");

  return { values, errors, touched, isValid, handleChange, handleBlur, reset };
}
