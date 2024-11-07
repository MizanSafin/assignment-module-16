 const createBlog  =  async(req, res) => {
    res.status(201).json({message: 'Blog created successfully.'})
}
 const readBlog =  async(req, res) => {
     res.status(200).json({message: 'Blog read successfully.'})
 }

const updateBlog =  async(req, res) => {
    res.status(200).json({message: 'Blog update successfully.'})
}

 const deleteBlog =  async(req, res) => {
     res.status(200).json({message: 'Blog delete successfully.'})
 }


module.exports = {createBlog,readBlog,updateBlog,deleteBlog}
