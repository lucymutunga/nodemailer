const nodemailer = require("nodemailer");
require("dotenv").config();
const email_config = require("../config/emailConfig");
const transporter = nodemailer.createTransport(email_config);
const message_options = {
  to: "lucyalphonce18@gmail.com",
  from: process.env.EMAIL_USER,
  subject: "Weekly Report",
  html: '"<p>Hello Jonathan,</p><p>Please find the attached weekly report.</p>',
  attachments: [
    {
      filename: "report.pdf",
      path: "./report.pdf",
      contentType: "application/pdf",
    },
  ],
};

async function sendMail() {
  try {
    let results = await transporter.sendMail(message_options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
