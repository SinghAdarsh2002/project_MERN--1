# 🚀 Uber Clone Frontend Documentation

This project is a React-based frontend for an Uber-like application. Below you'll find documentation for the main context and page components.

---

## 📂 Project Structure

```
src/
  context/
    UserContext.jsx
  pages/
    Start.jsx
    UserLogin.jsx
    UserSignup.jsx
    CaptainLogin.jsx
    CaptainSignup.jsx
  App.jsx
  main.jsx
```

---

## 🧩 Context

### `UserContext.jsx`

- Provides a `UserDataContext` using React Context API.
- Stores and shares user data (`user`, `setUser`) across the app.
- Wraps the entire app in `main.jsx` for global access.

**Usage Example:**
```jsx
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const { user, setUser } = useContext(UserDataContext)
```

---

## 📄 Pages

### `Start.jsx`

- Landing page with a "Continue" button that routes to `/login`.

---

### `UserLogin.jsx`

- Login form for users.
- Fields: Email, Password.
- On submit: (to be implemented) should authenticate user and update context.
- Link to `/signup` for new users.
- Link to `/captain-login` for captain login.

---

### `UserSignup.jsx`

- Signup form for users.
- Fields: First Name, Last Name, Email, Password.
- On submit: (to be implemented) should register user and update context.
- Link to `/login` for existing users.

---

### `CaptainLogin.jsx`

- Login form for captains.
- Fields: Email, Password.
- On submit: (to be implemented) should authenticate captain.
- Link to `/captain-signup` for new captains.
- Link to `/login` for user login.

---

### `CaptainSignup.jsx`

- Signup form for captains.
- Fields: First Name, Last Name, Email, Password, Vehicle Color, Plate, Capacity, Vehicle Type.
- On submit: (to be implemented) should register captain.
- Link to `/captain-login` for existing captains.

---

## 🛣️ Routing

- `/` → `Start`
- `/login` → `UserLogin`
- `/signup` → `UserSignup`
- `/captain-login` → `CaptainLogin`
- `/captain-signup` → `CaptainSignup`

Routing is handled in `App.jsx` using `react-router-dom`.

---

## 📝 How Context is Provided

In `main.jsx`, the app is wrapped with `UserContext` and `BrowserRouter`:

```jsx
<UserContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</UserContext>
```

---

## ⚠️ Notes

- All context and import paths use `UserContext.jsx` (capital "U") for consistency.
- Authentication and API integration logic should be implemented in the submit handlers.
- For cross-platform compatibility, always match file
