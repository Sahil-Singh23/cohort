# Authentication System

A simple full-stack authentication system built with Express.js and vanilla JavaScript, featuring JWT-based authentication and minimalist UI design.

## 🚀 Live Demo

- **Live Link**: [Live Application](https://authentication-system-oowr.onrender.com/)
- **GitHub**: [Source Code](https://github.com/Sahil-Singh23/Authentication-System)

## ✨ Features

- JWT Authentication with 30-day expiration
- User signup and signin functionality
- Protected routes with middleware
- Responsive minimalist UI
- Client-side error handling

## 🛠️ Tech Stack

- **Express.js** - Backend server
- **JWT** - Authentication
- **Vanilla JavaScript** - Frontend
- **HTML/CSS** - UI

## 📁 Project Structure

```
auth-class/
├── index.js                 # Express server & auth logic
├── package.json             # Dependencies & scripts
├── .env                     # Environment variables
└── public/
    ├── index.js             # Frontend auth functions
    ├── signin.html          # Sign in page
    ├── signup.html          # Sign up page
    ├── dash.html            # Protected dashboard
    └── styles.css           # Global styles
```

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sahil-Singh23/Authentication-System.git
   cd auth-class
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   echo "JWT_SECRET=your-secret-key" > .env
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Open browser** - Navigate to `http://localhost:3000`

## 🔧 API Endpoints

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| `POST` | `/signup` | Create new user   |
| `POST` | `/signin` | Authenticate user |
| `GET`  | `/me`     | Get user info     |

## 📝 How it Works

1. User creates account via signup page
2. Server generates JWT token on signin
3. Token stored in localStorage
4. Protected routes validate token
5. Dashboard displays user information

---

**Built with ❤️ by Sahil Singh**
