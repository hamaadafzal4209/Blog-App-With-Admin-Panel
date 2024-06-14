import { Link } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";

function Home() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const res = await fetch(`/api/post/getposts`)
        const data = await res.json();
        if(res.ok){
          setPosts(data.posts);
        }
      };
      fetchPosts();
    } catch (error) {
      console.log(error.message)
    }
  },[])
  return (
    <div className="">
      <div className="max-w-6xl mx-auto space-y-6 mt-24 mb-20 p-3">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Welcome to my Blog</h1>
        <p className="text-gray-500 text-sm">
          {
            "Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages."
          }
        </p>
        <button>
          <Link
            to="/search"
            className="text-teal-500 text-sm hover:underline font-bold"
          >
            View all posts
          </Link>
        </button>
      </div>
      <div className="p-3 bg-[#fef3c7] dark:bg-[#334155]">
        <CallToAction />
      </div>
      <div className="my-6 max-w-6xl mx-auto w-full p-3">
        <h1 className="text-center text-2xl font-semibold mb-5">Recent Post</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
      <div className="my-6 text-center text-teal-500 text-xl">
      <Link to='/search'>View all posts</Link>
      </div>
    </div>
  );
}

export default Home;
