import test from "node:test";
import assert from "node:assert/strict";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateAge,
  validatePassword,
  validateConfirm,
  validateTerms,
  validateForm,
  passwordStrength,
} from "./validators.js";

test("name", () => {
  assert.notEqual(validateName(""), "");
  assert.notEqual(validateName("Ab"), "");
  assert.notEqual(validateName("R2D2"), "");
  assert.equal(validateName("Abhishek Patil"), "");
});

test("email", () => {
  assert.notEqual(validateEmail("abc"), "");
  assert.notEqual(validateEmail("a@b"), "");
  assert.equal(validateEmail("a@b.com"), "");
});

test("phone", () => {
  assert.notEqual(validatePhone("12345"), "");
  assert.notEqual(validatePhone("5123456789"), "");
  assert.equal(validatePhone("9876543210"), "");
});

test("age", () => {
  assert.notEqual(validateAge(""), "");
  assert.notEqual(validateAge("12"), "");
  assert.notEqual(validateAge("20.5"), "");
  assert.equal(validateAge("21"), "");
});

test("password", () => {
  assert.notEqual(validatePassword("short"), "");
  assert.notEqual(validatePassword("alllowercase1!"), "");
  assert.notEqual(validatePassword("NoDigits!!"), "");
  assert.notEqual(validatePassword("NoSpecial12"), "");
  assert.equal(validatePassword("Str0ng@Pass"), "");
});

test("confirm and terms", () => {
  assert.notEqual(validateConfirm("x", "y"), "");
  assert.equal(validateConfirm("y", "y"), "");
  assert.notEqual(validateTerms(false), "");
  assert.equal(validateTerms(true), "");
});

test("strength meter", () => {
  assert.equal(passwordStrength(""), 0);
  assert.equal(passwordStrength("Str0ng@Pass"), 4);
});

test("whole form valid", () => {
  const errors = validateForm({
    name: "Abhishek Patil",
    email: "a@b.com",
    phone: "9876543210",
    age: "21",
    password: "Str0ng@Pass",
    confirm: "Str0ng@Pass",
    terms: true,
  });
  assert.ok(Object.values(errors).every((e) => e === ""));
});
