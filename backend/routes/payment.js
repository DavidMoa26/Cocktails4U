const { paymentRequest } = require('../controllers/paymentControllers')
const router = require("express").Router();

router.post("/", paymentRequest);

module.exports = router;