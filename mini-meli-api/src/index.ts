import express from 'express';
import cors from 'cors';
import productRouter from './routes/productRouter';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log(`running http://localhost:${PORT}`);
});
