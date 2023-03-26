const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order: { type: Array, required: true },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;