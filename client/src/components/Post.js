import React from "react";

const Post = props => {
  const getData = props.posts;

  const postData = getData.map(data => {
    return (
      <div className="post-container" key={data._id}>
        <p>{data.textUpper}</p>
        <img src={data.image} alt="motivational quote" />
        <p>{data.textLower}</p>
      </div>
    );
  });

  return <div className="all-posts">{postData}</div>;
};

export default Post;
