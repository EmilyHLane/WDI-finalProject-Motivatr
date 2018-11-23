const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/index");

//find all users
router.get("/", ctrl.user.index);

//find user by id
router.get("/:id", ctrl.user.show);

//create new user
router.post("/", ctrl.user.create);

module.exports = router;
