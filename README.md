# Tennis Database (MERN Stack Video App)

A full-stack MERN application for managing and browsing tennis match videos. This project showcases key competencies including API-driven services, scalable architecture, lean practices, and UI/UX integration.

---

##  Project Overview

Built to explore the full development lifecycle—from backend service design to frontend data display. Enables users to:
- Upload and categorize tennis match videos (Admins only)
- View, search, and filter videos by player, date, or match type  
- Interact seamlessly via a modern React-based UI, interfacing with APIs built using Node.js and Express, backed by MongoDB

---

##  Tech Stack

- **Frontend**: React + CSS Bootstrap — mirrors modern web UI best practices and agile front-end development. Uses **Vite** for fast development and bundling.
- **Backend**: Node.js + Express — demonstrates building scalable RESTful services and API endpoints  
- **Database**: MongoDB — shows experience with document-based, schema-flexible databases  
- **Architecture**: Clear separation of concerns—API layers, UI, and data persistence.
- **RESTful Design**: Clean API structure (GET, POST, PUT, DELETE) for video resources  
- **Lean Development**: Minimal dependencies, modular components, quick iteration ready for CI/CD pipelines  

---

##  Project Structure

The codebase is structured as a monorepo, with clearly separated ```client``` and ```server``` directories for frontend and backend logic.

client/                # React front-end
└── src/
    ├── components/
    ├── pages/
    └── services/      # API client

server/                # Express backend
└── src/
    ├── controllers/   # Route handlers
    ├── models/        # Mongoose schemas
    ├── routes/        # API endpoints
    └── services/      # Business logic and data access

Dockerfile             # Container setup (if present)

---

View the live app here: https://tennis-database.fly.dev