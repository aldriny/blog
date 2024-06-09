import Blog from '../models/Blog.js';

const blogCreate = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((createdBlog) =>{
        res.status(201).json(createdBlog);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({"message": "Error creating blog"});
    })
};

const blogIndex = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({"message": "Error getting blogs"});
    })
};

const blogDetails = (req, res) => {
    Blog.findById(req.params.id)
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({"message": "Error getting blog"});
    })
};

const blogUpdate =  (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body)
   .then(() =>{
    res.status(200).json({"message":"updated successfully"})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({"message": "Error updating blog"});
    })
};

const blogDelete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(200).json({"message":"deleted successfully"})
        })
    .catch(err => {
        console.log(err);
        res.status(500).json({"message": "Error deleting blog"});
    })
};

export default {
    blogCreate, blogIndex, blogDetails, blogUpdate, blogDelete
};