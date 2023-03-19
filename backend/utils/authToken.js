const jwt = require("jsonwebtoken");

const createToken = (user) => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        jwtSecretKey
    );

    return token;
};

module.exports = createToken;