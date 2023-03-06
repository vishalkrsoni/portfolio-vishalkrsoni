const nodemailer = require("nodemailer");
const express = require("express");
const port = 8080;
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, GMAIL_EMAIL, GMAIL_PASSWORD } =
  process.env;

const mailerConfig = () => {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
};

const sendEmail = async (transporter, name, email, message) => {
  try {
    if (!name || !email || !message) {
      return console.error("Name, email and message are required fields");
    }
    let mailOptions = {
      from: GMAIL_EMAIL,
      to: "vishalkrsoni1@gmail.com",
      subject: `message from ${name}--Portfolio`,
      text: message,
    };


    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw new Error(`Error sending email: ${error}`);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  } catch (error) {
    console.error(error);
  }
};


const sendContactInfo = async (req, res) => {
  const { name, email, message } = req.body;
  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return res.status(400).send({
      error: "Name, email, and message are required fields.",
      status: "incomplete info",
      message: "incomplete info",
    });
  }

  const transporter = mailerConfig();
  try {
    await sendEmail(transporter, name, email, message);
    res.status(200).send({
      success: true,
      message: "Email sent successfully",
      status: "success",
    });
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send({
      error,
      message: "An error occurred, Please try again later.",
    });
  }

};


app.use(cors());
app.use(express.json());
app.post("/contact", sendContactInfo);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});
