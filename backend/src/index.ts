import dotenv from 'dotenv';
import express from 'express';
import bookRouter from './routes/book.router';
import userRouter from './routes/user.router';

dotenv.config();

const PORT: number = +(process.env.PORT || 3000);

const app = express();

// JSON Middleware & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/book', bookRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.info(`Listening on PORT ${PORT}`);
});
