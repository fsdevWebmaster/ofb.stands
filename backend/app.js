import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import imdbconnect from './database/connection.js';
import router from './routes/app.router.js';

const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/api', router);

imdbconnect()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`Backend listening at :${process.env.PORT}`);
    });
  }).catch((err) => {
    console.log('Db connection error.');
  });