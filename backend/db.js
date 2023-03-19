const mongoose = require("mongoose")


const dbConnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Database connected")
        })
        .catch((error) => console.error("MongoDB connection failed:", error.message));
}

module.exports = dbConnect