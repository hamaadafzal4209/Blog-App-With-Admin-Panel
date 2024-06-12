import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {FaThumbsUp}  from 'react-icons/fa';

function Comment({ comment }) {
  const { currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);
  return (
    <div className="mb-4 border-b-[1px]  dark:border-gray-500 pb-4 px-3">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full flex-shrink-0">
          <img
            className="h-full w-full rounded-full object-cover"
            src={user.profilePicture}
            alt=""
          />
        </div>
        <div className="">
          <div className="flex items-center gap-1 mb-0">
            <p className="text-xs trancate">
              @{user ? user.username : "ananymous user"}
            </p>
            <p className="text-xs text-gray-500">
              {moment(comment.createdAt).fromNow()}
            </p>
          </div>
          <p className="text-xs text-gray-500 pb-2 mb-2 mt-1">
            {comment.content}
          </p>
          <div className="flex items-center gap-2">
            <FaThumbsUp className="text-gray-400" size={14}/>
            <p className="text-xs text-gray-400">1 Like</p>
            <p className="text-xs text-gray-400">Edit</p>
            <p className="text-xs text-gray-400">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
