import logo from "./Logo.png";
import { Search } from "lucide-react";

const navItems = ["Home", "Explore", "Message", "Profile"];

function Navbar() {
  return (
    <nav
      className=" sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between border-b border-gray-300 px-4  ">
      <div className="flex 
    hover:scale-105 transition-transform duration-300 ease-in-out
    items-center gap-2 py-4">
        <img
          src={logo}
          alt="Socialfy Logo"
          className="h-10 w-10 object-cover"
        />
        <span className="font-bold text-3xl text-purple-700 ">Socialfy</span>
      </div>

      <div className=" flex items-center gap-10 text-xl">
        {navItems.map((item) => (
          <button
            key={item}
            className="
              text-purple-700 cursor-pointer
              border-b-2 border-transparent
              hover:border-purple-700
              pb-1
              hover:scale-105
              transition-all duration-300 ease-in-out
            "
            aria-label={item}>
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 py-4">
        <div className="relative hidden sm:block w-56">
          <input
            type="search"
            placeholder="Search Socialfy"
            className="
              w-full border border-gray-300
              rounded-2xl p-2 pr-10
              focus:outline-none focus:border-purple-700
            "
          />
          <Search className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        <button
          className="
          bg-gradient-to-r from-purple-700 to-blue-600
          text-white rounded-2xl px-4 py-1
          hover:scale-105 transition-transform duration-300
        ">
          Login
        </button>

        <button
          className="
          bg-gradient-to-r from-purple-700 to-blue-600
          text-white rounded-2xl px-4 py-1
          hover:scale-105 transition-transform duration-300
        ">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
