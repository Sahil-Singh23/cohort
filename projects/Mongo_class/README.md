# Todo Application Backend

## About

A secure backend API for managing todos with user authentication, built with Express.js and MongoDB.

**Topics:** `todo` `backend` `mongodb` `express` `jwt` `nodejs` `rest-api`

## Features

- User signup and signin with email validation
- JWT Authentication with 30-day expiration
- Password hashing with bcrypt
- CRUD operations for todos
- Input validation with Zod
- MongoDB database integration

## Tech Stack

- **Express.js** - Backend server
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Zod** - Input validation

## Project Structure

```
Mongo_class/
├── index.js                 # Main server & API routes
├── db.js                    # Database models
├── package.json             # Dependencies & scripts
├── .env                     # Environment variables
└── .gitignore              # Git ignore rules
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Mongo_class
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   echo "JWT_SECRET=your-secret-key" > .env
   echo "DB_URL=your-mongodb-connection-string" >> .env
   ```

4. **Start the server**

   ```bash
   node index.js
   ```

5. **Server runs on** - `http://localhost:3000`

## API Endpoints

### Authentication

| Method | Endpoint  | Description    |
| ------ | --------- | -------------- |
| `POST` | `/signup` | Create account |
| `POST` | `/signin` | User login     |

### Todos (Protected)

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| `POST` | `/todo`  | Create new todo  |
| `GET`  | `/todos` | Get user's todos |

## How it Works

1. User creates account with email validation
2. Password gets hashed and stored securely
3. JWT token generated on successful signin
4. Token required for all todo operations
5. Users can create and view their todos

## Frontend

Frontend will be built with React (coming soon!)

---

**Built with ❤️ by Sahil Singh**
