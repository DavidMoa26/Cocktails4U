const paymentRequest = async (req, res) => {
    res.status(200).send(req.body)
}

module.exports = { paymentRequest }