import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = process.env.PORT || 3000;

// Define a list of users
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Peter Parker' },
];

// Welcome message endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the simple TypeScript Express API!');
});

// Get users endpoint
app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
