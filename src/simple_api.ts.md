## Table of Contents
- [Introduction](#introduction)
- [Endpoints](#endpoints)
  - [Welcome Message](#welcome-message)
  - [Get Users](#get-users)
- [Running the Server](#running-the-server)
- [Example Usage Code](#example-usage-code)

## Introduction
This is a simple Express API written in TypeScript. It features two endpoints: a welcome message and a user list.

## Endpoints

### Welcome Message
**Method:** GET
**Path:** `/`
**Response:** A welcome message

###### Example usage:
```typescript
import axios from 'axios';
const response = await axios.get('http://localhost:3000/');
console.log(response.data); // "Welcome to the simple TypeScript Express API!"
```

### Get Users
**Method:** GET
**Path:** `/users`
**Response:** A list of users

###### Example usage:
```typescript
import axios from 'axios';
const response = await axios.get('http://localhost:3000/users');
console.log(response.data); // [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Peter Parker' }]
```

## Running the Server
To run the server, type the following command in the terminal:

```bash
npm run start
```

The server will start listening on port 3000 by default. You can change this port in the `.env` file.

## Example Usage Code
Here is an example of how to use the API in your own code:
```typescript
import axios from 'axios';

// Send a GET request to the welcome message endpoint
const welcomeResponse = await axios.get('http://localhost:3000/');
console.log(welcomeResponse.data);

// Send a GET request to the users endpoint
const usersResponse = await axios.get('http://localhost:3000/users');
console.log(usersResponse.data);
```