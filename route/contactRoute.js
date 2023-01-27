const router = require("express").Router();
const nodeMailer = require("nodemailer");
require('dotenv').config()

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({
      msg: "please fill all the fields",
    });
  }

  let smtpTransporter = nodeMailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: "vishal.sony1@gmail.com",
    subject: `message from ${data.name}`,
    html: `
      <h3> Informations </h3>
        <ul>
          <li> Name: ${data.name} </li>
          <li> Email: ${data.email} </li>
        </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
        `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({
          msg: " Please fill all the fields",
        });
      res.status(200).json({
        msg: " Thank you for contacting Vishal! ",
      });
      console.log('thank you')
    } catch (error) {
      if (error)
        return res.status(500).json({
          msg: " Server error occurred",
        });
    }
  });
});
module.exports=router
