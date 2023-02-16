require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { transporter, mailOptions } = require("./mailerConfig");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    mailOptions.to = req.body.email;
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: `Email has been sent to ${req.body.email}.`,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message || "something went wrong",
      message: "something went wrong",
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
