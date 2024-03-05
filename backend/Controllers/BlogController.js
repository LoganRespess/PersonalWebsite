const Blog = require('../Model/Blog');


//Getting the blog post and its data
const getBlogPost = async (req, res) => {
    if (!req?.params?.title) return res.status(400).json({ 'message': 'Blog Title required.' });
    const foundBlog = await Blog.findOne({ title: req.params.title}).exec();
    if (!foundBlog) return res.status(404);
    return res.status(200).json(foundBlog)
}

const createBlog = async (req, res) => {
    if (!req.body.title || !req.body.author || !req.body.body) return res.status(400).json('message', 'Post Needs Title, Author, and Body.')
    const dupe = await Blog.findOne({title: req.body.title}).exec();
    if (dupe) return res.status(409);
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