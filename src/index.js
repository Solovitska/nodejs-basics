// import { initMongoDB } from './db/initMongoDB.js';
// import { startServer } from './server.js';
// import dotenv from 'dotenv';
// dotenv.config();
// const bootstrap = async () => {
//   await initMongoDB();
//   startServer();
// };

// bootstrap();
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Маршрут для перевірки
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  // Виконання запиту до локального сервера
  axios.get('http://localhost:3000')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error connecting to server:', error);
    });
});
