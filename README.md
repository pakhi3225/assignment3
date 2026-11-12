# Client-Side Form Validation Application using ReactJS

Web Technology (2304362L) | Practical No. 3 | T.Y. B.Tech | AY 2025-26

A user registration form built with React (Vite). Every field is validated in
real time, error messages appear as the user types, and the **Register** button
stays disabled until the whole form is valid.

## Features

- Reusable functional components with props (`FormField`, `CheckboxField`,
  `PasswordStrength`, `SuccessCard`)
- Controlled inputs managed with `useState`
- `useEffect` re-validates the form on every value change
- Custom hook `useFormValidation` keeps form logic out of the UI
- Pure validators in `src/utils/validators.js` with unit tests
- Password strength meter, show/hide password, accessible error messages

## Validation rules

| Field | Rule |
| --- | --- |
| Full name | Required, 3+ chars, letters/space/. ' - only |
| Email | Required, valid format |
| Phone | Required, 10-digit Indian mobile starting 6-9 |
| Age | Required, whole number 16-100 |
| Password | 8+ chars with upper, lower, digit and special char |
| Confirm password | Must match password |
| Terms | Must be checked |

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # run validator unit tests
npm run build      # production build in dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  main.jsx                      entry point
  App.jsx                       page layout
  styles.css                    styling
  components/
    RegistrationForm.jsx        form container
    FormField.jsx               reusable input + error
    CheckboxField.jsx           reusable checkbox + error
    PasswordStrength.jsx        strength meter
    SuccessCard.jsx             shown after valid submit
  hooks/
    useFormValidation.js        values, touched, errors, isValid
  utils/
    validators.js               pure validation rules
    validators.test.js          unit tests (node:test)
```

## Deploy

**Vercel / Netlify:** import the GitHub repo. Build command `npm run build`,
output directory `dist`.

**GitHub Pages:** run `npm run build`, then publish the `dist` folder (for
example with the `gh-pages` package or a GitHub Actions workflow). The Vite
`base` is set to `./`, so no extra path configuration is needed.

Live URL: _add your deployed URL here_
