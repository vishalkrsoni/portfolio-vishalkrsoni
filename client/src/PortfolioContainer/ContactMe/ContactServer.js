const nodemailer = require("nodemailer");

async function messageSender(messageDetails) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "YOUR_EMAIL",
      pass: "YOUR_PASSWORD",
    },
  });

  let info = await transporter.sendMail({
    from: `"${messageDetails.name}" <${messageDetails.email}>`,
    to: "RECEIVER_EMAIL",
    subject: "New message from Contact Us form",
    text: messageDetails.message,
  });

  console.log("Message sent: %s", info.messageId);
}



const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@gmail.com", // generated ethereal user
      pass: "your-email-password", // generated ethereal password
    },
  });

  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: "receiver-email@gmail.com",
    subject: "New Contact Form Submission",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});









