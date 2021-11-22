const { Order, User } = require("../models");

module.exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.findAll({ limit: 10 });

        res.send({ data: orders });
    } catch (error) {
        next(error);
    }
};

module.exports.getOrderById = async (req, res, next) => {
    try {
        const { params } = req;

        const order = await Order.findByPk(params.id);


        res.send({ data: order });
    } catch (error) {
        next(error);
    }
};

module.exports.createOrder = async (req, res, next) => {
    try {
        const {
            params: { userId },
        } = req;

        const order = await Order.create({ ...req.body, userId });



        res.send({ data: order });
    } catch (error) {
        next(error);
    }
};

module.exports.updateOrder = async (req, res, next) => {
    try {
        const {
            params: { id },
            body,
        } = req;

        const foundOrder = await Order.findByPk(id);

        if (!foundOrder) {
            return next(new Error("Order not found"));
        }


        const updatedOrder = await foundOrder.update(body);



        res.status(200).send({ data: updatedOrder });
    } catch (error) {
        next(error);
    }
};

module.exports.deleteOrder = async (req, res, next) => {
    try {
        const {
            params: { id },
        } = req;

        const foundOrder = await Order.findByPk(id);


        if (!foundOrder) {
            return next(new Error("Order not found"));
        }

        const verdict = await foundOrder.destroy();

        if (!verdict) {
            throw new Error("Cannot delete order");
        }

        res.status(200).send({ data: foundOrder });
    } catch (error) {

        next(error);
    }
};

module.exports.getUserOrders = async (req, res, next) => {
    try {
        const {
            params: { userId },
        } = req;


        const foundUser = await User.findByPk(userId);

        if (!foundUser) {
            return next(new Error("User not found"));
        }

        const orders = await foundUser.getOrders();

        if (!orders) {
            return next(new Error("Orders not found"));
        }

        res.status(200).send({ data: orders });
    } catch (error) {

        next(error);
    }
};