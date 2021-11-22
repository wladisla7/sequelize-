const userRouter = require('express').Router();
const userController = require("../controlles/users.controller");
const { validateOrders } = require("../middlewares/users.mw");
const { createOrder, getUserOrders } = require("../controlles/orders.controller");



userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);

userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

userRouter.post("/:userId/orders", validateOrders, createOrder);
userRouter.get("/:userId/orders", getUserOrders);

module.exports = userRouter;