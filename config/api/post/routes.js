const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/index");

//add post routes here
router.get("/", ctrl.post.index);
router.get("/:id", ctrl.post.show);

module.exports = router;
