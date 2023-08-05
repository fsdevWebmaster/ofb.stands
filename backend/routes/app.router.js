import express from 'express';
import { login, register, users } from '../controllers/app.controller.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/users', users);

export default router;