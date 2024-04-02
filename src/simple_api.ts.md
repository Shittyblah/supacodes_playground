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

This is a simple TypeScript Express API that provides two endpoints: a welcome message and a list of users. The API is designed to be easy to use and extensible, so you can easily add your own endpoints and functionality.

## 🧰 Prerequisites

- Node.js
- TypeScript

## 📥 Installation

To install the API, run the following command:

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

```sh
curl http://localhost:3000/
```

**Response:**

```
Welcome to the simple TypeScript Express API!
```

### Get Users Endpoint

The get users endpoint returns a list of users.

```typescript
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});
```

**Example Usage:**

```sh
curl http://localhost:3000/users
```

**Response:**

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

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📄 License

This project is licensed under the MIT License.