const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const main = async (name, number, message) => {
  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp-mail.outlook.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASSWORD,
  //   },
  // });
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    service: "yahoo",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Portfolio" <${process.env.EMAIL}>`, // sender address
    to: process.env.PERSONAL_EMAIL, // list of receivers
    subject: "Message From Portfolio", // Subject line
    text: `
    Name: ${name}
    Contact number: ${number}
    Message : ${message}
    `, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

app.post("/email", (req, res, next) => {
  console.log(req.body);
  const user = req.body.user;
  main(user.name, user.number, user.message).catch((err) => console.log(err));
  res.status(200).json({
    data: "Success",
  });
});

app.all("*", express.static("public"));

//Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
