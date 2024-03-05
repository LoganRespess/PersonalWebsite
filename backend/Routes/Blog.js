const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/BlogController');

router.route('/')
    .post(BlogController.createBlog)
    
router.route('/:title')
    .get(BlogController.getBlogPost)

module.exports = router;