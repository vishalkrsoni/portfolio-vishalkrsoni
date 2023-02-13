const nodemailer = require("nodemailer");
const express = require("express");
const port = 8080;
const app = express();

const mailerConfig = () => {
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "benton.wolff22@ethereal.email",
      pass: "F8gxVwKE2GvfEZNjRn",
    },
  });
};

const sendEmail = async (transporter, name, email, message) => {
  try {
    if (!name || !email || !message) {
      return console.error("Name, email and message are required fields");
    }
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: "vishal.sony1@gmail.com",
      subject: "Message from portfolio",
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

  if (!name || !email || !message) {
    return res.status(400).send({
      error: "Name, email, and message are required fields.",
      status: "incomplete info",
    });
  }

  const transporter = mailerConfig();

  try {
    await sendEmail(transporter, name, email, message);
    res.status(200).send({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send({
      error,
      message:
        "An error occurred while sending the email. Please try again later.",
    });
  }
};

app.use(express.json());
app.post("/contact", sendContactInfo);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/`);
});
