const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-mail@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-mail@gmail.com",
  to: "your-mail@gmail.com",
  subject: "Test Email",
  text: "Hello from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
