import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSclice";
import { useEffect, useState } from "react";

function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess(data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          DevBytes
          </span>
        </Link>
        <form onSubmit={handleSubmit} className="hidden lg:block">
          <TextInput
            type="text"
            placeholder="Search..."
            icon={AiOutlineSearch}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center lg:hidden"
          color="gray"
        >
          <Link to="/search">
            <AiOutlineSearch />
          </Link>
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User Avatar"
                  img={currentUser.profilePicture}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block truncate text-sm font-medium">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              {currentUser.isAdmin && (
                <Link to="/dashboard?tab=dash">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
              )}
              {!currentUser.isAdmin && (
                <Link to="/dashboard?tab=profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
              )}
              {currentUser.isAdmin && (
                <Link to="/create-post">
                  <Dropdown.Item>Create Post</Dropdown.Item>
                </Link>
              )}
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as="div">
            <Link
              to="/"
              className={`block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                path === "/"
                  ? "text-blue-700 dark:text-blue-500 md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-gray-900"
                  : "text-gray-900"
              }`}
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link as="div">
            <Link
              to="/about"
              className={`block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                path === "/about"
                  ? "text-blue-700 dark:text-blue-500 md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-gray-900"
                  : "text-gray-900"
              }`}
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link as="div">
            <Link
              to="/projects"
              className={`block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                path === "/projects"
                  ? "text-blue-700 dark:text-blue-500 md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-gray-900"
                  : "text-gray-900"
              }`}
            >
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;