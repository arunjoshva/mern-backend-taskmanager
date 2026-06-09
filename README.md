# Task Manager Backend API

A scalable RESTful API for a Task Management Application built using Node.js, Express.js, TypeScript, MongoDB, and JWT Authentication.

This project demonstrates modern backend development practices including authentication, authorization, database integration, API design, password security, and TypeScript-based development.

---

## Features

### Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing using bcryptjs
* User-specific task access

### Task Management

* Create Task
* Get All Tasks
* Update Task
* Delete Task
* Toggle Task Status
* Search-ready architecture
* User-based task ownership

### Backend Development

* RESTful API Architecture
* Middleware-based Authentication
* Error Handling
* Environment Variables Configuration
* MongoDB Integration with Mongoose
* TypeScript Support
* Modular Project Structure

---

## Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas
* Mongoose ODM

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Development Tools

* tsx
* TypeScript Compiler (tsc)
* Nodemon
* Git & GitHub

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### Tasks

All task routes require JWT Authentication.

#### Create Task

```http
POST /api/tasks
```

#### Get All Tasks

```http
GET /api/tasks
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

#### Toggle Task Status

```http
PATCH /api/tasks/:id/status
```

---

## Security Features

* Password Hashing with bcryptjs
* JWT Token-based Authentication
* Route Protection Middleware
* User-specific Resource Access
* Environment Variable Management

---

## Skills Demonstrated

This project demonstrates proficiency in:

* TypeScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API Development
* JWT Authentication
* Password Security
* Backend Architecture
* Middleware Design
* Error Handling
* Git & GitHub
* Environment Configuration
* CRUD Operations

---