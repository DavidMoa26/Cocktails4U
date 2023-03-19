const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: Object, required: true },
        isPopular: { type: Boolean },
        isAvailable: { type: Boolean },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

exports.Product = Product;