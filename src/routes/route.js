const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");
const blogController = require("../controller/blogController");
const middleWare = require("../authentication/auth")

// // router.post("/authors", authorController.createAuthor)
// // router.post("/blogs", blogController.createBlog)
// // router.put("/blogs/:blogId", blogController.updateBlog)
// // router.delete("/blogs/:blogId", blogController.deleteBlog)
// // router.delete("/blogs", blogController.deleteparams)
// // router.delete("/blogs", blogController.deleteparams)
// // router.post("/login", authorController.login);


// module.exports = router;
//-------------------------unprotected apis----------------------/ /

router.post("/authors", authorController.createAuthor);
router.post("/login", authorController.login);

//------------------------protected apis-----------------------//
router.post("/blogs", middleWare.authentication, blogController.createBlog);
router.get("/blogs", middleWare.authentication, blogController.getSpecificAllBlogs);
router.put("/blogs/:blogId", middleWare.authorization, blogController.updateBlog);
router.delete("/blogs/:blogId", middleWare.authorization, blogController.deleteBlog);
router.delete("/blogs", middleWare.authorization, blogController.deleteparams);
module.exports = router;

