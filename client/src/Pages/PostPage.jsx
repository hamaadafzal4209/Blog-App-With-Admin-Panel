import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CallToAction from "../Components/CallToAction";
import CommentSection from "../Components/CommentSection";

function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          setError(true);
          return;
        }
        setLoading(false);
        setError(false);
        setPost(data.posts[0]);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchPost();
  }, [postSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen" size="xl">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error loading post.</div>;
  }

  return (
    <main className="flex flex-col max-w-6xl mx-auto p-3 w-full">
      <h1 className="text-3xl md:text-4xl max-w-2xl mx-auto mt-10 p-3 capitalize w-full font-semibold text-center">
        {post && post.title}
      </h1>
      <Link to={`/search?category=${post && post.category}`}>
        <Button color="gray" pill size="xs" className="mx-auto mt-4 mb-6">
          {post && post.category}
        </Button>
      </Link>
      <img
        className="max-h-[500px] object-cover w-full p-3 "
        src={post && post.image}
        alt=""
      />
      <div className="flex items-center justify-between p-3 max-w-2xl mx-auto w-full border-b-2">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {" "}
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>

      <div className="max-w-4xl mx-auto my-6">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />

    </main>
  );
}

export default PostPage;
