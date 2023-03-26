const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const path = require("path");
var register = require('./routes/user')
const bodyParser = require('body-parser')
const dbConnect = require('./db');
const productsRoute = require('./routes/product')
const paymentRoute = require('./routes/payment')
const url = require('url');

dotenv.config({ path: path.resolve(__dirname, './.env') })

const app = express();
app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
        next();
    }
});

app.use(express.static(path.join('public')))


app.use('/api/user', register);
app.use('/products', productsRoute)
app.use('/api/payment', paymentRoute)

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})





const PORT = process.env.PORT || 5000
dbConnect();

app.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
