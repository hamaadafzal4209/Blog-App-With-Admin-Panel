import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="my-16">
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
          This is a demo project. You can sign up with your email and password or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <div className="block">
                <Label htmlFor="username" value="Your Username" />
              </div>
              <TextInput
                id="username"
                name="username"
                type="text"
                placeholder=""
                required
              />
            </div>
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
              />
            </div>
            <div className="mt-2">
              <Button
                gradientDuoTone="purpleToPink"
                className="w-full"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-600'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
