import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "Ironman",
      userImage:
        "https://media1.popsugar-assets.com/files/thumbor/ZCWD9YXxqYzk9riO2WR2OrxzWUw/721x0:1801x1080/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/01/098/n/46207611/5d2cc4f65d1ab1d1992803.52716266_/i/Why-Tony-Stark-Best-Marvel-Character.jpg",
      img: "https://crops.giga.de/78/94/09/01d85c44b7f4a73043d9ab7f0c_YyAzMzg0eDE5MDQrMTA4KzI0OAJyZSA0ODAgMjcwAzc0MDg0N2EwZGIw.jpg",
      caption: "Looking cool",
    },
    {
      id: "2",
      username: "BlackWidow",
      userImage:
        "https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg",
      img: "https://www.tvinsider.com/wp-content/uploads/2022/09/cobra-kai-season-5-1014x570.jpg",
      caption: "Miagi-do Rocks",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
