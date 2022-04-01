const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Mail = async (req, res) => {
  const {service, name, email, phone, message} = req.body;

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
    if (emailRes[0].statusCode === 202) {
      console.log('MAIL SUCCESS', req.body);
      res.status(200).json(req.body);
    } else {
      console.log('MAIL ERROR => Something went wrong while sending email');
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
}

export default Mail