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
    createdBy: {},
    image: "image x string here",
    text: "motivational quote for image x",
    datePosted: "",
    comments: [],
    likes: 100
  },
  {
    createdBy: {},
    image: "image y string here",
    text: "motivational quote for image y",
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
