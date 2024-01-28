import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import KeyboardRouter from './route/keyboard';
import mongoose from 'mongoose';

const main = async () => {
  dotenv.config();
  mongoose.set('strictQuery', false); // Deprecation warning
  await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ipn1hmq.mongodb.net/
    `,
  );
};

main()
  .then(() => console.log('Successfully connected mongoDB'))
  .catch((err) => console.log(err));

const PORT = 8070;
const app = express();

app.use(cors());
app.use(express.json()); // To parse request body
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/keyboard', KeyboardRouter);

app.listen(PORT, () => {
  console.log(`Wow! It's connected to ${PORT}`);
});
