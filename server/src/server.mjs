import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  return response.json('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})