const mongoose = require("mongoose");
const port = 27017;
const url = process.env.MONGODB_URI || `mongodb://localhost:${port}/motivatr`;

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
