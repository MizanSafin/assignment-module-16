const {createBlog, readBlog,updateBlog, deleteBlog} = require("../controllers/blogController")

const express = require('express');
const router = express.Router();

//create route
router.post('/create-blog',createBlog );

//read route
router.get("/read-blog",readBlog);

// update Blog
router.put("/update-blog",updateBlog);

//delete Blog
router.delete("/delete-blog",deleteBlog);


module.exports = router;