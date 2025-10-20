import express from 'express';
import cors from 'cors';
import shoeRoutes from './routes/shoeRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', shoeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API URL: http://localhost:${PORT}`);
});