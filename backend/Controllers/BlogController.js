const Blog = require('../Model/Blog');


//Getting the blog post and its data
const getBlogPost = async (res, req) => {
    const foundBlog = await Blog.findOne({ id: res}).exec();
    console.log(foundBlog);
}