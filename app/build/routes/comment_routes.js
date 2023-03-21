"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_1 = require("../controllers/comments/comment");
// Old node way
// const express = require('express');
// const Router = express.Router;
const router = (0, express_1.Router)();
router.get('/comments', comment_1.getTwits);
// router.get('/');
// router.patch('/:id');
// router.delete('/:id');
exports.default = router;
