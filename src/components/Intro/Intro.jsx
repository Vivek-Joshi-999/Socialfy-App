import React from "react";
import bg from "./bg.png"

const Intro = () => {
  return (
    // Main container
    <div className="flex  p-10 py-20 h-fit bg-gradient-to-r from-purple-100 to-blue-100 ">
      {/* left section  */}
      <div className="  w-fit flex flex-col items-start ">
        {/* Intro-Text */}
        <div>
          <h1 className="text-6xl font-bold wrap-break-word text-left p-2 leading-tight  ">
            Connect with people through{" "}<span className="text-purple-700">Socialfy</span>
          </h1>
        </div>
        {/* Intro-desc */}
        <div className="p-3">
          <p className="break-words leading-relaxed text-left font-500">
            A responsive social networking platform that allows users to
            connect, share thoughts, interact with content, and grow communities
            together.
          </p>
        </div>

        {/* Buttons */}

        <div className="p-3 gap-2 flex">
            <button className="
          bg-gradient-to-r from-purple-700 to-blue-600
          text-white rounded-2xl px-4 py-1 shadow-md shadow-gray-500
          hover:scale-105 transition-transform duration-300
        ">
          Get Started
        </button>
        <button className="
                    text-purple-700 border border-purple-700 rounded-2xl px-4 py-1
          hover:scale-105 transition-transform duration-300 shadow-md shadow-gray-500
        ">
          Explore Feed
        </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 h- overflow-hidden m-0">
        <img className="w-fit h-100 object-contain" src={bg} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Intro;
