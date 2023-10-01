const mailOptions = (sender, receiver, name, email, message) => {
  return {
    from: sender,
    to: receiver,
    subject: `Message from ${email} via portfolio`,
    html: `
    <html>
      <head>
        <style>
          /* Add CSS styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>You have received a message via portfolio</h1>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      </body>
    </html>
  `,
  };
};

module.exports = { mailOptions };
