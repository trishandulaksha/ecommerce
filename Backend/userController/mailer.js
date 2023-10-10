const nodemailer = require('nodemailer');
const mailGen = require('mailgen');

const nodeConfig = {
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
};

let transporter = nodemailer.createTransport(nodeConfig);


let mailGenerator = new mailGen({
    theme: 'default',
    product: {
        name: 'Mailgen',
        link: 'http://mailgen.js',
    }
});

const registerMail = (req, res) => {
    const { user_name, userEmail, text, subject } = req.body;

    try {
        const email = {
            body: {
                name: user_name,
                intro: text || "This is the test Email for the project",
                outro: "If you want any help, please reply to this email"
            }
        };

        const emailBody = mailGenerator.generate(email);

        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: subject || "Sign up successfully",
            html: emailBody
        };

        transporter.sendMail(message)
            .then(() => {
                return res.status(200).send({ message: "You should receive an email from us" });
            })
            .catch(err => {
                console.error(err); // Log the error for debugging
                res.status(500).send({ error: "Email could not be sent" });
            });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = registerMail;
