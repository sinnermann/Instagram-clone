import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import {
  DotsCircleHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Post = ({ img, userImg, username, caption, id }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }
  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
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
      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIconFilled onClick={likePost} className="text-red-400 btn" />

          <HeartIcon onClick={likePost} className="btn" />

          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post comments  */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div
              key={comment.data().id}
              className="flex items-center space-x-2 mb-2"
            >
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg" //{comment.data().userImage}
                alt="user-image"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
      {/* Post input box */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button
          type="submit"
          onClick={sendComment}
          disabled={!comment.trim()}
          className="text-blue-400 font-bold disabled:text-blue-200"
        >
          Post it
        </button>
      </form>
    </div>
  );
};

export default Post;
