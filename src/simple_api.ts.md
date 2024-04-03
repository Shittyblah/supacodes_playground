## 🌍 Table of Contents

- [Introduction](#introduction)
 - [Overview](#overview)
 - [Technologies](#technologies)
- [User Management](#user-management)
 - [Getting Users](#get-users)
 - [Getting a User by ID](#get-user-by-id)
 - [Creating a User](#create-user)
 - [Updating a User](#update-user)
 - [Deleting a User](#delete-user)
- [Server](#server)
 - [Starting the Server](#starting-the-server)
 - [Port Configuration](#port-configuration)
- [Endpoints](#endpoints)
 - [Welcome Message Endpoint](#welcome-message-endpoint)
 - [Get Users Endpoint](#get-users-endpoint)

## 💡 Introduction

### Overview

This TypeScript Express API is a straightforward and scalable RESTful API that enables developers to manage users in their applications. It provides endpoints for creating, reading, updating, and deleting users.

### Technologies

- Express.js
- TypeScript
- Node.js

## 👥 User Management

### Getting Users

**Description:**
Retrieves a list of all users.

**Endpoint:**
```
GET /users
```

**Example Usage:**
```typescript
fetch('/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Getting a User by ID

**Description:**
Retrieves a specific user by their ID.

**Endpoint:**
```
GET /users/:id
```

**Example Usage:**
```typescript
fetch('/users/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Creating a User

**Description:**
Creates a new user.

**Endpoint:**
```
POST /users
```

**Example Usage:**
```typescript
fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Jane Doe' }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Updating a User

**Description:**
Updates an existing user by their ID.

**Endpoint:**
```
PUT /users/:id
```

**Example Usage:**
```typescript
fetch('/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Smith' }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Deleting a User

**Description:**
Deletes an existing user by their ID.

**Endpoint:**
```
DELETE /users/:id
```

**Example Usage:**
```typescript
fetch('/users/1', {
  method: 'DELETE',
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## 🌐 Server

### Starting the Server

**Description:**
Starts the server and listens for requests.

**Endpoint:**
```
PORT=3000 node index.js
```

### Port Configuration

**Description:**
The port on which the server listens for requests is configurable through the `PORT` environment variable.

**Default Port:**
3000

**Endpoint:**
```
export PORT=3000 # Sets the port to 3000
node index.js
```

## 👋 Endpoints

### Welcome Message Endpoint

**Description:**
Displays a welcome message.

**Endpoint:**
```
GET /
```

**Example Usage:**
```typescript
fetch('/')
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Get Users Endpoint

**Description:**
Retrieves a list of all users.

**Endpoint:**
```
GET /users
```

**Example Usage:**
```typescript
fetch('/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```