import express from 'express';
import { register } from '../controllers/app.controller.js';
const router = express.Router();

router.post('/register', register);

export default router;