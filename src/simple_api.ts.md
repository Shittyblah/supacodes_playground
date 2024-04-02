## 🔗 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Welcome Message Endpoint](#welcome-message-endpoint)
  - [Get Users Endpoint](#get-users-endpoint)
- [Contributing](#contributing)
- [License](#license)

## 💡 Introduction

This documentation provides a detailed overview of a simple TypeScript Express API. This API offers two endpoints: one for displaying a welcome message and another for retrieving a list of users. It's designed to be user-friendly and extensible, allowing you to effortlessly integrate your custom endpoints and functionalities.

## 🧰 Prerequisites

To utilize this API, you must have the following prerequisites installed:

- Node.js
- TypeScript

## 📥 Installation

Installing the API is a breeze. Simply execute the following command:

```sh
npm install
```

## 🏃‍♂️ Usage

### Welcome Message Endpoint

The welcome message endpoint returns a simple welcome message.

```typescript
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the simple TypeScript Express API!');
});
```

**Example Usage:**

To access the welcome message, send a GET request to the root URL:

```sh
curl http://localhost:3000/
```

**Response:**

The response will be a simple welcome message:

```
Welcome to the simple TypeScript Express API!
```

### Get Users Endpoint

The get users endpoint provides a list of users.

```typescript
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});
```

**Example Usage:**

To retrieve the list of users, send a GET request to the '/users' endpoint:

```sh
curl http://localhost:3000/users
```

**Response:**

The response will be a JSON array containing the list of users:

```json
[
  {
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2,
    "name": "Jane Doe"
  }
]
```

## 🤝 Contributing

We welcome contributions to enhance this API. Before submitting a pull request, please take the time to review our [contributing guidelines](CONTRIBUTING.md).

## 📄 License

This project is distributed under the MIT License.