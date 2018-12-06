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

//------Nodemailer------
app.post("/send", (req, res) => {
  const output = `
  <p>${req.body.message}</p>
  <p>${req.body.textUpper}</p>
  <img src=${req.body.image} alt=${data.altTxt} />
  <p>${req.body.textLower}</p>`;

  console.log(output);
});

//------Catchall route handler------
app.get("*", (req, res) => {
  res.send("<h1>404: Not Found...</h1>");
});

//------Start Server------
app.listen(port, () => console.log(`server is up on ${port}`));
