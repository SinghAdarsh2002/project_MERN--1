# right-ride 🚗- Full Stack Project Documentation

This project is a MERN stack Uber-like ride sharing application.  
It consists of a **React frontend** and a **Node.js/Express backend** with MongoDB database.

---

## 📦 Folder Structure

```
project_MERN -1/
  Backend/
    controllers/
    db/
    middlewares/
    models/
    routes/
    services/
    app.js
    server.js
    socket.js
    package.json
    .env
    README.md
  Frontend/
    src/
      assets/
      components/
      context/
      pages/
      App.jsx
      App.css
      index.css
      main.jsx
    public/
    package.json
    .env
    README.md
```

---

## 🖥️ Frontend (`Frontend/`)

Built with **React** and **Vite**.

### Key Files & Folders

- `src/context/`
  - `UserContext.jsx`: Provides user authentication context.
  - `CaptainContext.jsx`: Provides captain authentication context.
  - `SocketContext.jsx`: Provides socket connection context.
- `src/pages/`
  - `UserLogin.jsx`, `UserSignup.jsx`, `UserLogout.jsx`: User authentication pages.
  - `CaptainLogin.jsx`, `CaptainSignup.jsx`, `CaptainLogout.jsx`: Captain authentication pages.
  - `Home.jsx`, `Start.jsx`, `Riding.jsx`, `CaptainHome.jsx`, etc.: Main app pages.
- `src/components/`: UI components for ride flow, tracking, vehicle info, etc.
- `main.jsx`: Entry point, wraps app in contexts and router.
- `App.jsx`: Main app component, handles routing.

### How Context Works

Contexts are provided at the top level in `main.jsx`:

```jsx
<CaptainContext>
  <UserContext>
    <SocketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SocketProvider>
  </UserContext>
</CaptainContext>
```

### Routing

- `/login`, `/signup`: User authentication
- `/captain-login`, `/captain-signup`: Captain authentication
- `/`: Start page
- `/home`, `/riding`, `/captain-home`, etc.: Main app pages

---

## 🛠️ Backend (`Backend/`)

Built with **Node.js**, **Express**, and **MongoDB**.

### Key Files & Folders

- `controllers/`: Route handlers for users, captains, rides, maps.
- `models/`: Mongoose schemas for users, captains, rides, tokens.
- `routes/`: API endpoints for users, captains, rides, maps.
- `services/`: Business logic for user, captain, ride, and map operations.
- `middlewares/`: Auth middleware for JWT verification.
- `db/db.js`: MongoDB connection.
- `app.js`, `server.js`: Express app and server startup.
- `socket.js`: Socket.io integration for real-time features.

### Main API Endpoints

#### User Endpoints (`/users`)
- `POST /users/register`: Register a new user.
- `POST /users/login`: Login user.
- `GET /users/profile`: Get authenticated user profile.
- `GET /users/logout`: Logout user.

#### Captain Endpoints (`/captains`)
- `POST /captains/register`: Register a new captain.
- `POST /captains/login`: Login captain.
- `GET /captains/profile`: Get authenticated captain profile.
- `GET /captains/logout`: Logout captain.

#### Ride & Map Endpoints
- `POST /rides/request`: Request a ride.
- `GET /rides/:id`: Get ride details.
- `GET /maps/route`: Get route info.

### Authentication

- JWT-based authentication for users and captains.
- Auth middleware protects profile and logout routes.

---

## ⚡ How to Run

### Backend

```bash
cd Backend
npm install
npm start
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 📝 Notes

- Ensure MongoDB is running and `.env` files are configured.
- Use consistent casing for all file names and imports (important for cross-platform compatibility).
- Socket.io is used for real-time ride updates.

---

## 📚 Further Documentation

See individual `README.md` files in `Frontend/` and `Backend/` for detailed API and component docs.

---