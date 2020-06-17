const nodemailer = require('nodemailer');
require('express-async-errors')
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const preMiddlewares = require('./src/middlewares/preMiddlewares');
const errorMiddlewares = require('./src/middlewares/errorMiddlewares');
const routes = require('./src/routes');
const databaseConfig = require('./src/config');
const port = process.env.PORT;

preMiddlewares;

app.use('/api', routes())

app.use('/', (req, res) => {
  res.status(200).sendFile(express.static("public/index.html"));
})

errorMiddlewares(app)

server.listen(port, () => {
  console.log(`::: server listening on port ${port}. Open via http://localhost:${port}/`);
  databaseConfig();
});

server.on('error', (error) => {
  console.log(`::> an error occiurred in our server: \n ${error}`);
});


module.exports = app

// Add verify (callback) call to test connection and authentication to email
transporter.verify(function(error, success) {
  if (error) {
       console.log(error);
  } else {
       console.log('Server is ready to take our messages');
  }
});

// setup the email details
var transport = nodemailer.createTransport({
  host: "smtp.mail.com",
  port: 2525,
  auth: {
    user: "",
    pass: ""
  },
  debug: true, // show debug output
  logger: true // log information in console
});

// Email message options
var mailOptions = {
  from: '"Example Team" <from@example.com>',
  to: 'user1@example.com, user2@example.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ;) ', 
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer',
};

// Deliver a mail
transport.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});