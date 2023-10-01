const nodemailer = require('nodemailer');
const { GMAIL_EMAIL, SMTP_EMAIL, SMTP_PASS } = process.env;

const transporter = nodemailer.createTransport({
  service: 'smtp.elasticemail.com',
  //   port: 465,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASS,
  },
});

const mailOptions = {
  from: GMAIL_EMAIL,
  to: GMAIL_EMAIL,
  subject: 'Send Email Using Nodemailer',
  html: `<!doctype html>
    <html lang="en-US">

    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Send Mail Using Nodemailer</title>
        <style type="text/css">
            body { font-family: 'Roboto', sans-serif; }
        </style>
    </head>

    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: white;" leftmargin="0">
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="white">
            <tr>
                <td>
                    <table style="max-width:670px;  margin:0 auto; padding:50px;" border="0"
                        align="left" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:40px;">&nbsp;</td>
                        </tr>
                        <tr>
                        <td style="font-size: 20px; font-weight: 500;">
                            Hello,<br><br>
                            I am sending this email using nodemailer.<br><br>
                           <br><br>
                        </td>
                        </tr>
                        <tr>
                            <td style="height:40px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
};

module.exports = {
  transporter,
  mailOptions,
};
