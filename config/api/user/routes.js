const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/index");

//add user routes here
router.get("/", ctrl.user.index);
// router.get("/:id", ctrl.user.show);

module.exports = router;
