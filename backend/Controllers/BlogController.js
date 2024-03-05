const Blog = require('../Model/Blog');


//Getting the blog post and its data
const getBlogPost = async (req, res) => {
    const foundBlog = await Blog.findOne({ id: req});
    res.json(foundBlog)
}

const createBlog = async (req, res) => {
    console.log(req.body);
    try {
        const result = await Blog.create({
            title: req.body.title,
            author: req.body.author,
            body: req.body.body
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
};
module.exports = {getBlogPost, createBlog};