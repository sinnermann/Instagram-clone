import React from "react";
import { DotsCircleHorizontalIcon } from "@heroicons/react/outline";

const Post = ({ img, userImg, username, caption, id }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt="Username"
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsCircleHorizontalIcon className="h-5" />
      </div>
      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt="post-image" />
    </div>
  );
};

export default Post;
