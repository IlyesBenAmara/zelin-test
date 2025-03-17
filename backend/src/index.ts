import dotenv from 'dotenv';
import express from 'express';
import bookRouter from './routes/book.router';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// JSON Middleware & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/book', bookRouter);

app.listen(PORT, () => {
  console.info(`Listening on PORT ${PORT}`);
});
