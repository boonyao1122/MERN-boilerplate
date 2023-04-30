const express = require("express");
const usersRouter = require("./users/index");

const router = express.Router();

router.use("/users", usersRouter);

module.exports = router;
