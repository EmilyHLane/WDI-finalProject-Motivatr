import React from "react";

const Post = props => {
  const getData = props.posts;
  console.log("get data is " + getData);
  const image = getData[0].image;
  console.log("image " + image);
  const postData = getData.map(data => {
    return (
      <div className="post-container">
        <p>{data.textUpper}</p>
        <img src={data.image} alt="motivational quote" />
        <p>{data.textLower}</p>
      </div>
    );
  });

  return <div className="all-posts">{postData}</div>;
};

export default Post;
