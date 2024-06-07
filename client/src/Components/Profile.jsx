import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-4 w-full">
      <h1 className="text-center text-3xl py-4 font-semibold">Profile</h1>
      <form className="flex flex-col gap-4 w-full">
        <div className="w-32 h-32 my-2 mx-auto rounded-full overflow-hidden shadow-md border-8 border-[lightgray] cursor-pointer">
          <img
            src={currentUser.profilePicture}
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>
        <TextInput
          type="text"
          id="username"
          name="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          name="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <Button gradientDuoTone="purpleToBlue" type="submit" outline>
          Update Profile
        </Button>
      </form>
      <div className="flex items-center justify-between mt-4 text-red-500">
        <span className="cursor-pointer hover:underline">Delete Account</span>
        <span className="cursor-pointer hover:underline">Sign out</span>
      </div>
    </div>
  );
}

export default Profile;
