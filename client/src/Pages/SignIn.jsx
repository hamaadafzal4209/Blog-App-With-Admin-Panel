import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      return setError("Please fill out all fields!");
    }
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Something went wrong!");
      } else {
        navigate("/");
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred during sign-up. Please try again later.");
    }
  };

  return (
    <div className="my-20">
      <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-3xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              hamaad
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="block w-full">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="name@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="password" value="Your Password" />
              </div>
              <TextInput
                id="password"
                name="password"
                type="password"
                placeholder="****"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </div>
            <div className="mt-2">
              <Button
                gradientDuoTone="purpleToPink"
                className="w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex gap-2">
                    <Spinner size="sm" />
                    <span>Loading</span>
                  </div>
                ) : (
                  <p>Sign In</p>
                )}
              </Button>
            </div>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-600">
              Sign Up
            </Link>
          </div>
          <div className="mt-5">
            {error && (
              <Alert color="failure">
                <span>{error}</span>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
