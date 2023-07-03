import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import router from './routes/app.router.js';
import { dbConnection } from './database/connection.js';
import { errors } from './services/app.service.js';

const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/api', router);

// app.use(errors);
app.use((err, req, res, next) => {
  return res.status(400).json({ error: 'Incomplete or invalid data.' })
});

dbConnection
  .then((result) => {
    console.log('Db connected.');
    app.listen(8000, () => {
      console.log('Backend listening at: ', 8000);
    })
  }).catch((err) => {
    console.log("Error connecting db:", err);
  });
