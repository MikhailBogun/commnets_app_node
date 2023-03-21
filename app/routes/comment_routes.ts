import { Router } from 'express';
import { getTwits } from '../controllers/comments/comment';

// Old node way
// const express = require('express');
// const Router = express.Router;

const router = Router();


router.get('/comments', getTwits);

// router.get('/');

// router.patch('/:id');

// router.delete('/:id');

export default router;