import React, { useContext, useRef, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { UserContext } from "../store/Context";

function Header() {
  const inputVal = useRef("");

  const { getUserInfo, darkMode, setdarkMode } = useContext(UserContext);
  return (
    <div>
      <header>
        <div className="flex justify-between items-center gap-1 p-2 mr-5 mb-5 ml-5">
          <h1 className="text-4xl font-extrabold text-slate-600 dark:text-white">
            DevFinder
          </h1>
          <button
            onClick={() => setdarkMode(!darkMode)}
            className="text-2xl font-semibold"
          >
            {!darkMode ? (
              <IoMdSunny className="text-4xl font-extrabold text-yellow-400 cursor-pointer z-10" />
            ) : (
              <FaMoon className="text-4xl font-extrabold text-gray-600 dark:text-white " />
            )}
          </button>
        </div>
        <div className="border mb-5 px-3 py-2 rounded-2xl dark:bg-white">
          <form
            className="flex justify-between items-center gap-2"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              let inputValue = inputVal.current.value;
              inputVal.current.value = "";
              getUserInfo(inputValue);
            }}
          >
            <input
              className="w-[100%] py-2 outline-none font-semibold text-gray-500"
              type="text"
              ref={inputVal}
              autoFocus
              placeholder="Enter Github Username ..."
            />
            <button
              className="bg-blue-900 px-5 py-2 rounded-lg text-white border-none outline-none font-semibold text-lg hover:bg-black"
              type="submit"
            >
              {" "}
              Search
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
