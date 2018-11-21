const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//------Middleware------

//------CORS------

//------Body Parser------

//------HTML endpoints------
app.get("/", (req, res) => res.send("Hello World"));

//------API endpoints------

//------Start Server------
app.listen(port, () => console.log(`server is up on ${port}`));
