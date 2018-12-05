const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const nodeMailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 4000;
const userRouter = require("./config/api/user/routes");
const postRouter = require("./config/api/post/routes");
const jwt = require("jsonwebtoken");

//------JWT Passport Variables------
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

//------Options------
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY
};

//------JWT Strategy------
const strategy = new JwtStrategy(opts, (payload, next) => {
  //GET USER FROM DB
  //can also exclude password
  User.forge({ id: payload.id })
    .fetch()
    .then(res => {
      next(null, res);
    });
});

passport.use(strategy);
app.use(passport.initialize());

//------CORS------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//------Body Parser------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//------HTML endpoints------
app.get("/", (req, res) => res.send("Hello World"));

//------API endpoints------
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

//------Send email testing------
nodeMailer.createTestAccount((err, account) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.com",
    port: 587,
    secure: false,
    auth: {
      user: "svgzjthrn3stjie3@ethereal.email",
      pass: "cd6pPPHHPaemhbm5Wx"
    }
  });

  let mailOptions = {
    from: '"Emily Testing" <emtest@example.com>', // sender address
    to: "fakeperson@example.com", // list of receivers
    subject: "testing123", // Subject line
    text: "hello world", // plain text body
    html: "<b>Helloooooo World!</b>" // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent", info.messageId, info.response);
    console.log("preview url: ", nodeMailer.getTestMessageUrl(info));
  });
});

//------Catchall route handler------
app.get("*", (req, res) => {
  res.send("<h1>404: Not Found...</h1>");
});

//------Start Server------
app.listen(port, () => console.log(`server is up on ${port}`));
