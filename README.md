# 🚀 Docker Compose + Node.js + MongoDB API

A beginner-friendly project demonstrating how to build and run a multi-container application using Docker Compose.

## 📌 Project Overview

This project uses:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose

The application exposes REST APIs to create and retrieve student data stored in MongoDB.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose

---

## 📂 Project Structure

```
docker-compose-node-mongodb/
│
├── models/
│   └── Student.js
├── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Run the Project

### Clone Repository

```bash
git clone https://github.com/aneesahmad081/docker-compose-node-mongodb.git
```

### Go to Project

```bash
cd docker-compose-node-mongodb
```

### Run with Docker Compose

```bash
docker compose up --build
```

Application:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### Home

```
GET /
```

Response

```json
{
  "message": "Welcome to Docker Compose + MongoDB Project 🚀"
}
```

---

### Create Student

```
POST /student
```

Body

```json
{
  "name": "Anees Ahmad",
  "age": 23,
  "city": "Dir"
}
```

---

### Get All Students

```
GET /students
```

---

## 🐳 Docker Commands

Build & Run

```bash
docker compose up --build
```

Stop

```bash
docker compose down
```

List Containers

```bash
docker ps
```

---

## 📚 What I Learned

- Docker Images
- Docker Containers
- Dockerfile
- Docker Compose
- MongoDB Container
- Docker Networking
- Docker Volumes
- Express.js
- Mongoose
- REST APIs
- Postman API Testing

---

## 👨‍💻 Author

**Anees Ahmad**

GitHub:
https://github.com/aneesahmad081
