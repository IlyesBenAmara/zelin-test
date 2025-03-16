import dotenv from 'dotenv'
import express from 'express';

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// JSON Middleware & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.info(`Listening on PORT ${PORT}`);
});
