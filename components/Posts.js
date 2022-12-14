import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "Ironman",
      userImage:
        "https://media1.popsugar-assets.com/files/thumbor/ZCWD9YXxqYzk9riO2WR2OrxzWUw/721x0:1801x1080/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/01/098/n/46207611/5d2cc4f65d1ab1d1992803.52716266_/i/Why-Tony-Stark-Best-Marvel-Character.jpg",
      img: "https://imgix.bustle.com/uploads/image/2018/7/31/1f186f0a-224e-430c-90b3-87ca11f21f73-kyles.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      caption: "Looking cool",
    },
    {
      id: "2",
      username: "BlackWidow",
      userImage:
        "https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg",
      img: "https://metro.co.uk/wp-content/uploads/2019/10/PRC_91771418.jpg?quality=90&strip=all",
      caption: "Looking Cool",
    },
    {
      id: "3",
      username: "BlackWidow",
      userImage:
        "https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg",
      img: "https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&dpr=1&url=https://eu-images.contentstack.com/v3/assets/blt8bbf16c2d7a209e5/blt7a98e5961c2760a7/62e0dd926d0e9331b618ca99/Instagram.png",
      caption: "Looking Cool",
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
