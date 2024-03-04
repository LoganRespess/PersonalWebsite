const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: File,
    date: { type: Date, default: Date.now },
    hidden: Boolean
});

module.exports = mongoose.model('Blog', blogSchema);