# Note To Self - Three Stack Implementations

This repository contains three different implementations of the same "Note To Self" application using different technology stacks. Each implementation provides the same core functionality but demonstrates different approaches using popular frameworks and databases.

## Stack 1: React + FastAPI + MongoDB

### Frontend (React)
- Modern React implementation with hooks
- TailwindCSS for styling
- Axios for API calls

Setup:
```
cd stack_1/client
npm install
npm start
```

### Backend (FastAPI)
- FastAPI for high-performance API
- Motor for async MongoDB operations
- CORS enabled for local development

Setup:
```
cd stack_1/server
pip install -r requirements.txt
uvicorn app:app --reload
```

Requirements:
- MongoDB running locally on default port (27017)

## Stack 2: Vue + Flask + PostgreSQL

### Frontend (Vue)
- Vue 3 with Composition API
- Vite for fast development
- TailwindCSS for styling

Setup:
```
cd stack_2/client
npm install
npm run dev
```

### Backend (Flask)
- Flask with SQLAlchemy ORM
- PostgreSQL database
- CORS enabled for local development

Setup:
```
cd stack_2/server
pip install -r requirements.txt
python app.py
```

Requirements:
- PostgreSQL installed and running locally
- Database named "notetoself" created

## Stack 3: Svelte + Express + SQLite

### Frontend (Svelte)
- Svelte with component-based architecture
- Rollup for bundling
- TailwindCSS for styling

Setup:
```
cd stack_3/client
npm install
npm run dev
```

### Backend (Express)
- Express.js REST API
- SQLite3 for simple data persistence
- CORS enabled for local development

Setup:
```
cd stack_3/server
npm install
npm run dev
```

Requirements:
- No additional database setup required (SQLite file created automatically)

## Features Common to All Implementations

- Add notes with timestamps
- View notes in reverse chronological order
- Responsive design
- Real-time updates when notes are added
- Consistent styling across all versions

## Architecture

Each stack follows a similar architecture:
- Frontend running on a development server
- Backend API with CORS enabled for local development
- Database for persistent storage
- RESTful API endpoints for getting and creating notes

## API Endpoints

All implementations expose the same API endpoints:

- `GET /api/messages` - Retrieve all messages
- `POST /api/messages` - Create a new message

## Development Ports

- Stack 1:
  - Frontend: http://localhost:3000
  - Backend: http://localhost:5000

- Stack 2:
  - Frontend: http://localhost:5173
  - Backend: http://localhost:5000

- Stack 3:
  - Frontend: http://localhost:8080
  - Backend: http://localhost:5000