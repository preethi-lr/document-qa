// src/server.ts

import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/uploadRoute';
import askRoute from './routes/askRoute';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', uploadRoute);
app.use('/ask', askRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
