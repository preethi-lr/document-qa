// src/routes/askRoute.ts

import express from 'express';
import { askOpenAI } from '../services/askOpenAI';

const router = express.Router();

router.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const answer = await askOpenAI(question);
    res.json({ answer });
  } catch (error) {
    console.error('Error in /ask route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
