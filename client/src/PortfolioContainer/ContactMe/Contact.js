import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(formData);
  };

  const sendMessage = (data) => {
    fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactUs;



const submitForm = async (e) => {
  e.preventDefault();
  setBool(true);

  const res = await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();

  if (data.success) {
    setBanner("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  } else {
    setBanner("Failed to send message. Please try again.");
  }

  setBool(false);
};








const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email-address@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email-address@gmail.com",
  to: email,
  subject: `Message from ${name}`,
  text: message,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    setBanner(
      "An error occurred while sending the email. Please try again later."
    );
  } else {
    console.log("Email sent: " + info.response);
    setBanner("Your email was sent successfully!");
  }
  setBool(false);
});



