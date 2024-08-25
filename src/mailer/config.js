const Mailgun = require("mailgun.js");
const formData = require("form-data");
const BASE_URL = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);

const authCredentials = {
  username: "api",
  key: process.env.MAILGUN_PRIVATE_KEY,
  url: "https://api.eu.mailgun.net/",
};

const mailgunClient = mailgun.client(authCredentials);
const domain = BASE_URL;

const sendEmail = async (mailOptions) => {
  return mailgunClient.messages.create(domain, mailOptions);
};

export default sendEmail;
