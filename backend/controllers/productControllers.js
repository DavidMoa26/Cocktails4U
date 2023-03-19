const { Product } = require("../models/product");
const cloudinary = require("../utils/cloudinary");

const addProduct = async (req, res) => {
    const { name, brand, desc, price, image } = req.body;

    try {
        if (image) {
            const uploadedResponse = await cloudinary.uploader.upload(image, {
                upload_preset: "online-shop",
            });

            if (uploadedResponse) {
                const product = new Product({
                    name,
                    brand,
                    desc,
                    price,
                    image: image,
                });

                const savedProduct = await product.save();
                res.status(200).send(savedProduct);
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).send(products)

    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getAllProducts, addProduct }