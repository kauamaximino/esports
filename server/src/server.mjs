import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  console.log('to aqui')
  return response.send('Hello World!');
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
})