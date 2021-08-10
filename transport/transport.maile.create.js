const mailer = require('nodemailer')

var transport = mailer.createTransport({
   host: "smtp.mailtrap.io",
   port: 2525,
   auth: {
     user: "169ce8a1764b65",
     pass: "faec5806484509"
   }
 });

 module.exports = transport