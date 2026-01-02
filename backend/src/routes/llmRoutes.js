import express from 'express';
import { llmChat } from '../controllers/llmController.js';

const router = express.Router();

// LLM chat endpoint - public access (no authentication required)
router.post('/chat', llmChat);

export default router;


