const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");
const createToken = require("../utils/authToken");
const nodemailer = require("nodemailer");
const Mailgen = require('mailgen')

const registerNewUser = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(15).required(),
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(3).max(50).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists...");


    const { name, email, password } = req.body;

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const token = createToken(user);



    let config = {
        service: 'gmail',
        auth: {
            user: 'dumo0533dm@gmail.com',
            pass: 'cdbkxyacvohxlxzq'
        }
    }
    let transporter = nodemailer.createTransport(config);

    let mailGen = new Mailgen({
        theme: 'default',
        product: {
            name: 'Cocktails4U',
            link: 'https://www.cocktails4u.co.il'
        },
        textDirection: 'rtl'
    })

    let response = {
        body: {
            greeting: 'שלום',
            signature: 'בברכה',
            name: name,
            intro: 'תודה שהצטרפת אלינו, כדי לאשר את המשתמש אנא לחצ/י על הכפתור למטה : ',
            action: {
                button: {
                    color: 'black',
                    text: 'אישור הרשמה',
                    link: `${process.env.BACKEND_URL}/api/user/register/${user._id}/validate/${token}`
                }
            }
        }
    }

    let mail = mailGen.generate(response)
    let message = {
        from: 'Cocktails4U',
        to: email,
        subject: 'אישור הרשמה',
        html: mail
    }

    transporter.sendMail(message).then(() => {
        user.save();
        res.send(token);
    })
        .catch((err) => {
            return res.status(500).json({ msg: err })
        })

}

const validateMail = async (req, res) => {


    const user = await User.findOne({ _id: req.params._id })
    if (!user) return res.status(400).send({ msg: "Invalid Link" })


    await User.updateOne({ _id: req.params._id }, { isConfirm: true })

    res.redirect('/')

}



const login = async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(6).max(200).required(),
    });


    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });



    if (!user) return res.status(400).send("Invalid email");
    if (!user.isConfirm) return res.status(400).send("Please confirm your email");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password...");

    const token = createToken(user);
    res.status(200).send(token)


}
const getUsers = async (req, res) => {

    try {
        const users = await User.find({});
        res.status(200).send(users)

    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { registerNewUser, login, validateMail, getUsers }