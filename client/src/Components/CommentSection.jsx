import { Button, Textarea } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CommentSection() {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const handleSubmit = async () => {};

  return (
    <>
      <div className="max-w-2xl p-3 mx-auto w-full">
        {currentUser ? (
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-400">Signed in as </p>
            <img
              className="h-5 w-5 rounded-full"
              src={currentUser.profilePicture}
              alt=""
            />
            <Link
              className="text-sm text-teal-500 hover:underline"
              to={"/dashboard?tab=profile"}
            >
              @{currentUser.username}
            </Link>
          </div>
        ) : (
          <div className="text-teal-500">
            You must be logged in to comment.{" "}
            <Link className="text-blue-500 hover:underline" to="/sign-in">
              Login
            </Link>
          </div>
        )}
        {currentUser && (
          <form
            onSubmit={handleSubmit}
            className="border mt-4 border-teal-500 rounded-md p-3"
          >
            <Textarea
              rows={3}
              maxLength={200}
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex items-center justify-between mt-5">
              <p>{200 - comment.length} words remaining</p>
              <Button type="submit" outline gradientDuoTone="purpleToPink">
                Submit
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default CommentSection;
