# Course Selling Platform Backend

## About

A comprehensive backend API for an online course marketplace with separate admin and user authentication, built with Express.js and MongoDB.

**Topics:** `course-selling` `marketplace` `backend` `mongodb` `express` `jwt` `nodejs` `rest-api` `e-learning`

## Features

- **Dual Authentication System**: Separate signup/signin for admins and users
- **Course Management**: Admins can create, update, and manage courses
- **Course Marketplace**: Users can browse and purchase courses
- **Purchase System**: Complete purchase tracking and history
- **JWT Authentication**: Secure token-based authentication for both user types
- **Password Security**: Bcrypt password hashing
- **Input Validation**: Comprehensive validation with Zod
- **MongoDB Integration**: Efficient data storage with Mongoose ODM

## Tech Stack

- **Express.js** - Backend server
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Zod** - Input validation
- **Nodemon** - Development server

## Project Structure

```
course-selling-app/
├── index.js                 # Main server & routes setup
├── db.js                    # Database models & connection
├── package.json             # Dependencies & scripts
├── .env                     # Environment variables
├── .env.example            # Environment template
├── .gitignore              # Git ignore rules
├── middleware/
│   ├── admin.js            # Admin authentication middleware
│   └── user.js             # User authentication middleware
└── routes/
    ├── admin.js            # Admin-specific routes
    ├── course.js           # Course browsing & purchase routes
    └── users.js            # User-specific routes
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd course-selling-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env file with your values:
   # DB_URL=your-mongodb-connection-string
   # JWT_ADMIN_SECRET=your-admin-jwt-secret
   # JWT_USER_SECRET=your-user-jwt-secret
   ```

4. **Start the server**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

5. **Server runs on** - `http://localhost:3001`

## API Endpoints

### Admin Routes (`/admin`)

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| `POST` | `/admin/signup`      | Admin account creation |
| `POST` | `/admin/signin`      | Admin login            |
| `POST` | `/admin/course`      | Create new course      |
| `PUT`  | `/admin/course`      | Update existing course |
| `GET`  | `/admin/course/bulk` | Get admin's courses    |

### User Routes (`/user`)

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| `POST` | `/user/signup`    | User account creation |
| `POST` | `/user/signin`    | User login            |
| `GET`  | `/user/purchases` | Get user's purchases  |

### Course Routes (`/course`)

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| `GET`  | `/course/preview`  | Browse all courses |
| `POST` | `/course/purchase` | Purchase a course  |

## Database Schema

### Users

- Email, password, firstName, lastName
- JWT authentication with separate secrets for admin/user

### Courses

- Title, description, price, imageUrl, creatorId
- Created and managed by admins

### Purchases

- Links users to purchased courses
- Tracks purchase history with timestamps

## How it Works

### For Admins:

1. Admin creates account with email validation
2. Admin signs in and receives JWT token
3. Admin can create, update, and manage courses
4. Admin can view all their created courses

### For Users:

1. User creates account with email validation
2. User signs in and receives JWT token
3. User can browse all available courses
4. User can purchase courses
5. User can view their purchase history with course details

## Authentication Flow

- **Separate JWT secrets** for admin and user authentication
- **Password hashing** with bcrypt for secure storage
- **Token-based authentication** for all protected routes
- **Middleware protection** for admin and user-specific endpoints

## Features in Detail

### Course Management

- Admins can create courses with title, description, price, and image
- Course updates are restricted to the creator
- Bulk retrieval of admin's courses

### Purchase System

- Users can purchase any available course
- Purchase history with populated course details
- Prevents duplicate purchases (can be enhanced)

### Security

- Input validation with Zod schemas
- Password complexity requirements
- Separate authentication contexts for admins and users

## Development

```bash
# Run in development mode with auto-restart
npm run dev

# Run tests (when implemented)
npm test
```

## Environment Variables

```bash
DB_URL=mongodb://localhost:27017/course-selling-app
JWT_ADMIN_SECRET=your-super-secret-admin-key
JWT_USER_SECRET=your-super-secret-user-key
```

---

**Built with ❤️ by Sahil Singh**
