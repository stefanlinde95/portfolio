const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
Name: ${body.name}\r\n
Email: ${body.email}\r\n
Message: ${body.message}\r\n
`;

  const data = {
    to: "stefanlinde1995@gmail.com",
    from: "stefanlinde1995@gmail.com",
    subject: "Uus kiri portfoolio lehelt",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};
