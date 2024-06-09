import express from 'express';
import BlogController from '../controllers/BlogController.js';

const route = express.Router();



route.post('/blogs/create', BlogController.blogCreate);
route.get('/blogs', BlogController.blogIndex);
route.get('/blogs/:id', BlogController.blogDetails);
route.put('/blogs/:id', BlogController.blogUpdate);
route.delete('/blogs/:id', BlogController.blogDelete);

export default route;















