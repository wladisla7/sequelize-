const express = require('express');
const router = express.Router();
const orderRouter = require("./orders.route")
const userRouter = require("./users.route")

router.use('/users', userRouter);
router.use("/orders", orderRouter);

module.exports = router;