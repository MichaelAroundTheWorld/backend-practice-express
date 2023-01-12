import express, { Express } from 'express';
import router from './router';
import mongoose from 'mongoose';

const PORT: number = 5002;

const DB_URL =
  'mongodb+srv://user:password@cluster0.cvmjhwo.mongodb.net/?retryWrites=true&w=majority';

const app: Express = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('SEREVER IS WORKING ON PORT ', PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
