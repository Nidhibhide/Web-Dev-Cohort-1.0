import nodemailer from "nodemailer";

const transporterFun = () => {
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kaylie.tromp@ethereal.email",
      pass: "KKVry718RT3DzfJuvN",
    },
  });
};

const mailOptions = (email, otp) => {
  return {
    from: " <kaylie.tromp@ethereal.email>", // sender address
    to: `${email}`, // list of receivers

    subject: "Your OTP Code",
    text: `Your OTP is ${otp} . It will expire in 5 mins`, // plain text body
  };
};

const mailOptionsForreset = (email, token) => {
  return {
    from: " <kaylie.tromp@ethereal.email>", // sender address
    to: `${email}`, // list of receivers
    // subject: "Email verification link", // Subject line
    subject: "Your reset Password verification Link",
    text: `Your reset Password verification link is Click here http://localhost:8080/api/user/reset/${token} . It will expire in 5 mins`, // plain text body
  };
};

export { mailOptions, transporterFun, mailOptionsForreset };
