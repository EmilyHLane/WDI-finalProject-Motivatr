const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userRouter = require("./config/api/user/routes");
const postRouter = require("./config/api/post/routes");

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

//------Start Server------
app.listen(port, () => console.log(`server is up on ${port}`));
