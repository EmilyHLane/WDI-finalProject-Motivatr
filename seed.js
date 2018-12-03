const db = require("./models");

//user seed data
const users = [
  {
    username: "emilytest",
    email: "emily@test.com",
    password: "123456",
    firstName: "emily",
    lastName: "test",
    admin: true
  },

  {
    username: "christest",
    email: "chris@test.com",
    password: "654321",
    firstName: "chris",
    lastName: "test",
    admin: false
  }
];

//post seed data
const posts = [
  {
    createdBy: {
      username: "emilytest",
      email: "emily@test.com",
      password: "123456",
      firstName: "emily",
      lastName: "test",
      admin: true
    },
    image: "https://placekitten.com/300/300",
    altTxt: "cute cat",
    textUpper: "Believe in yourself.",
    textLower:
      "You are braver than you think, more talented than you know, and capable of more than you imagine. Roy T. Bennett",
    datePosted: "",
    comments: [],
    likes: 100
  },
  {
    createdBy: {
      username: "christest",
      email: "chris@test.com",
      password: "654321",
      firstName: "chris",
      lastName: "test",
      admin: false
    },
    image: "https://www.fillmurray.com/300/300",
    altTxt: "Bill Murry",
    textUpper: "Life is so damn short;",
    textLower: "For fuck's sake, just do what makes you happy.",
    datePosted: "",
    comments: [],
    likes: 50
  }
];

//comments seed data
const comments = [
  {
    commentBy: "x",
    commentText:
      "comment text here dodo dodo dodo dodo this is the twilight zone"
  },
  {
    commentBy: "y",
    commentText: "y comment string here nana nana nana nana batmaaaaaaannnnnn"
  }
];

//delete all users
db.User.deleteMany(err => {
  if (err) throw err;
  console.log("all users deleted");
  //delete all posts
  db.Post.deleteMany(err => {
    if (err) throw err;
    console.log("all posts deleted");
    //delete all comments
    db.Comment.deleteMany(err => {
      if (err) throw err;
      console.log("all comments deleted");

      //create users
      db.User.create(users, (err, newUsers) => {
        if (err) {
          return console.log(err);
        }
        console.log("saved new users: ", newUsers);
        //create posts
        db.Post.create(posts, (err, newPosts) => {
          if (err) {
            return console.log(err);
          }
          console.log("saved new posts: ", newPosts);
          //create comments
          db.Comment.create(comments, (err, newComments) => {
            if (err) {
              return console.log(err);
            }
            console.log("saved new comments: ", newComments);

            //associate posts with users
            newPosts.forEach((post, index) => {
              post.createdBy = newUsers[index];
              post.comments = newComments[index];
              console.log(`Post #${index} saved!`);
              post.save();
              console.log(post);
            });
          });
        });
      });
    });
  });
});
