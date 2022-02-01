// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import nodemailer from 'nodemailer'
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Mail = async (req, res) => {
  const {service, name, email, phone, message} = req.body;

  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: '465',
  //   secure: true,
  //   auth: {
  //     user: process.env.user,
  //     pass: process.env.pass,
  //   },
  // })


  try {
    const emailRes = await sgMail.send({
      from: process.env.MY_MAIL,
      to: 'rick@capace.se',
      subject: `Contact form submission from ${service}`,
      html: `<p><strong>Namn: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Telefon: </strong> ${phone} </p><br>
      <p><strong>Subject: </strong> ${service} </p>
      <p><strong>Meddelande: </strong> ${message} </p>
      `,
    })

    console.log('message sent');
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body)
}

export default Mail