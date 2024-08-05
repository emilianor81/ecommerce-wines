require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,// true for 465, false for other ports
      port: 465,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

async function send(mail, subject, text) {
    try {
      const email = await transporter.sendMail({
          from: '"VinotecApp 🍾 🍷"grupo12ecommerce@gmail.com', // TODO: email sender
          to: mail, // TODO: email receiver
          subject: subject,
          text: text,
      });
      return email;
    }catch (error) {
       console.log('error',error)
    }    
}

module.exports = {  send };