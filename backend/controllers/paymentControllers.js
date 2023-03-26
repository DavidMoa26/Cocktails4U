const { Order } = require("../models/order");

const paymentRequest = async (req, res) => {

    const paymentDetails = req.body

    const order = new Order({ order: paymentDetails });



    // if payment successful -> save order to DB without card details - pelecard API

    await order.save();




    res.status(200).send({ order: paymentDetails })


}

module.exports = { paymentRequest }