const { getAllProducts, addProduct } = require('../controllers/productControllers')

const router = require("express").Router();

//CREATE
router.post("/", addProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

module.exports = router;