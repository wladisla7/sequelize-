const orderRouter = require('express').Router();
const { getAllOrders, getOrderById, updateOrder, deleteOrder } = require("../controlles/orders.controller");


orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.patch("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

module.exports = orderRouter;