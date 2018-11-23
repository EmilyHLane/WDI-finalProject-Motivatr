const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/index");

//find all posts
router.get("/", ctrl.post.index);

//find post by id
router.get("/:id", ctrl.post.show);

//create new post
router.post("/", ctrl.post.create);

//edit post
router.put("/:id", ctrl.post.update);

//delete post
router.delete("/:id", ctrl.post.destroy);

module.exports = router;
