const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userRouter = require("./config/api/user/routes");
const postRouter = require("./config/api/post/routes");
const secretOrKey = process.env.SECRET_OR_KEY;
const jwt = require("jsonwebtoken");
// const path = require("path");

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

//-----send static file request to client-----
// app.use(express.static(path.join(__dirname, "client", "build")));

//------HTML endpoints------
app.get("/", (req, res) => res.send("Hello World"));

//------API endpoints------
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

//-----fallback to index.html if req not handled by other api requests -----
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

//------Start Server------
app.listen(port, () => console.log(`server is up on ${port}`));
