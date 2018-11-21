const mongoose = require("mongoose");
const port = 27017;
const url = `mongodb://localhost:${port}/reddit-clone`;

mongoose
  .connect(
    url,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Mongodb connected on port ${port}`))
  .catch(err => console.log(err));

module.exports = {
  Post: require("./Post"),
  Comment: require("./Comment"),
  User: require("./User")
};
