# 🚀 CodeMentorAI

<div align="center">

![Java](https://img.shields.io/badge/Java-21+-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.x-green?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)

### AI-Powered Coding Interview Preparation Platform

**Learn • Practice • Analyze • Improve**

A modern full-stack coding platform that combines an online coding judge with AI-powered code review, interview preparation, personalized learning, and analytics.

**Built with Spring Boot, React, PostgreSQL and AI.**

---

🌐 **Live Website**

Frontend

https://code-mentor-ai-psi.vercel.app

Backend API

https://codementorai-1-hdhx.onrender.com/api/hello

</div>

---

# 📖 About

CodeMentorAI is an AI-assisted coding interview preparation platform designed to help developers improve their programming skills through coding challenges, instant code execution, AI-powered feedback, and personalized learning.

Unlike traditional coding platforms, CodeMentorAI doesn't just tell you whether your solution is correct—it explains:

- Why your code works
- Why it fails
- How to optimize it
- Time & Space Complexity
- Better approaches
- Interview tips
- Edge cases
- Best practices

The goal is to transform coding practice into an interactive AI learning experience.

---

# ✨ Features

## Authentication

- Secure JWT Authentication
- User Registration
- User Login
- Protected Routes
- Password Encryption (BCrypt)
- Spring Security

---

## Coding Platform

- Browse Coding Problems
- Problem Difficulty Levels
- Code Editor
- Online Code Compilation
- Multiple Language Support
- Hidden Test Cases *(Upcoming)*
- Submission History *(Upcoming)*

---

## AI Features

- AI Code Review
- AI Suggestions
- Complexity Analysis
- Bug Detection
- Code Optimization
- Dry Run Explanation
- Interview Preparation Assistance

---

## Dashboard

- Coding Statistics
- Problems Solved
- Acceptance Rate
- Activity Graph
- Leaderboard
- Progress Tracking

---

## User Profile

- Update Profile
- Progress Analytics
- Personal Dashboard
- Learning History

---

## Admin Features

- Manage Problems
- Manage Users
- Add Coding Questions
- Dashboard Analytics

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Axios
- Tailwind CSS
- React Hot Toast

---

## Backend

- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Maven

---

## Database

- PostgreSQL

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- Render PostgreSQL

---

# 📂 Project Structure

```
CodeMentorAI

├── backend
│
├── src
│ ├── controller
│ ├── service
│ ├── repository
│ ├── entity
│ ├── dto
│ ├── security
│ ├── config
│ └── exception
│
├── frontend
│
├── src
│ ├── pages
│ ├── components
│ ├── services
│ ├── hooks
│ ├── context
│ └── assets
│
└── README.md
```

---

# 🔒 Authentication Flow

```
User

↓

Login

↓

JWT Generated

↓

Stored in Local Storage

↓

Authorization Header

↓

Spring Security

↓

Protected APIs
```

---

# ⚙ API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/users/register | Register User |
| POST | /api/users/login | Login |

---

## Profile

| Method | Endpoint |
|---------|-----------|
| GET | /api/users/me |
| PUT | /api/users/me |

---

## Compiler

| Method | Endpoint |
|---------|-----------|
| POST | /api/compiler/run |

---

## AI

| Method | Endpoint |
|---------|-----------|
| POST | /api/ai/review |

---

# 🚀 Getting Started

Clone Repository

```bash
git clone https://github.com/Justt-Abhayyy/CodeMentorAI.git
```

Go into Project

```bash
cd CodeMentorAI
```

---

## Backend

```bash
cd backend
```

Install dependencies

```bash
./mvnw clean install
```

Run

```bash
./mvnw spring-boot:run
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🗄 Environment Variables

Backend

```
SPRING_DATASOURCE_URL=

SPRING_DATASOURCE_USERNAME=

SPRING_DATASOURCE_PASSWORD=

JWT_SECRET=
```

Frontend

```
VITE_API_URL=
```

---

# 📸 Screenshots

> Screenshots will be added after UI redesign.

---

# 📈 Current Progress

- [x] JWT Authentication
- [x] Spring Security
- [x] PostgreSQL Integration
- [x] React Frontend
- [x] User Registration
- [x] User Login
- [x] Backend Deployment
- [x] Frontend Deployment
- [x] AI API Integration
- [x] Online Compiler API

---

# 🚧 Upcoming Features

- 500+ Coding Problems
- Contest Mode
- Company-wise Questions
- Monaco Code Editor
- AI Mentor
- AI Chat
- AI Hint Generator
- AI Interview Coach
- AI Resume Review
- Leaderboards
- Badges
- Streak System
- GitHub Style Activity Heatmap
- Real-Time Notifications
- Dockerized Code Execution
- Redis Caching
- Google Login
- GitHub Login
- Email Verification
- Forgot Password
- Admin Dashboard
- Analytics Dashboard
- Multi-language Support

---

# 🎯 Vision

The long-term vision of CodeMentorAI is to become an intelligent coding interview preparation platform that combines:

- Online Coding Judge
- AI Mentor
- AI Code Reviewer
- Interview Preparation
- Learning Analytics
- Personalized Recommendations

into one seamless learning experience.

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

**Abhay Singh**

Computer Science Engineering Student

AI • Machine Learning • Full Stack Development

GitHub

https://github.com/Justt-Abhayyy

LinkedIn

https://www.linkedin.com/in/iabhaypal

Email

abhaypal.cse@gmail.com

---

<div align="center">

### ⭐ If you like this project, consider giving it a Star!

**Made with ❤️ using Java, Spring Boot, React & AI**

</div>
