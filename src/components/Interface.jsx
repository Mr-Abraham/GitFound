import React, { useContext } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { UserContext } from "../store/Context";

function Interface() {
  const { data } = useContext(UserContext);
  const showdate = () => {
    const timestamp = new Date(`${data.created_at}`);
    const year = timestamp.getFullYear();
    const day = timestamp.getDate();
    const month = timestamp.getMonth().toString();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const joindate = `${day} ${months[month - 1]}, ${year}`;
    return joindate;
  };
  return (
    <div>
      <div className="flex justify-center gap-5 p-2 m-2">
        <section>
          <img
            src={data.avatar_url}
            alt="Github User Image"
            className=" w-[350px] rounded-full"
          />
          <p className="text-center mt-5 font-semibold text-gray-500 dark:text-slate-300">
            Joined - {showdate()}
          </p>
        </section>
        <section className="px-5 mt-5 ml-10">
          <h1 className="text-5xl font-extrabold text-blue-950 mb-4 dark:text-slate-200">
            {data.name}
          </h1>
          <h3 className="text-xl font-semibold text-slate-600 mb-5 mt-6 dark:text-slate-200">
            @{data.login}
          </h3>
          <p className="text-xl font-bold text-gray-500 dark:text-slate-200 ">
            {data.bio}
          </p>
        </section>
      </div>
      <div className="flex justify-between items-center py-3 px-10 mb-3 mt-5 bg-slate-700 rounded-xl text-white">
        <section>
          <h1 className="font-semibold text-2xl text-slate-100 text-center">
            Repos
          </h1>
          <h2 className="font-extrabold text-lg text-center mt-2">
            {data.public_repos}
          </h2>
        </section>
        <section>
          <h1 className="font-semibold text-2xl text-slate-100 text-center">
            Followers
          </h1>
          <h2 className="font-extrabold text-lg text-center mt-2 ">
            {data.followers}
          </h2>
        </section>
        <section>
          <h1 className="font-semibold text-2xl text-slate-100 text-center">
            Following
          </h1>
          <h2 className="font-extrabold text-lg text-center mt-2 ">
            {data.following}
          </h2>
        </section>
      </div>
      <div className="px-5 py-4 flex justify-between items-center w-full my-6">
        <section className="flex items-center gap-2">
          <FaTwitter className="text-2xl text-blue-500 font-semibold " />
          <h1 className="font-semibold dark:text-blue-200">
            @{data.twitter_username}
          </h1>
        </section>
        <section className="flex items-center gap-2">
          <FaLink className="text-2xl text-blue-900 font-semibold " />{" "}
          <a className="dark:text-blue-200" href={data.blog} target="_blank">
            {data.blog}
          </a>
        </section>
        <section className="flex items-center gap-2">
          <FaLocationDot className="text-2xl text-red-400 font-semibold " />
          <h1 className="font-semibold dark:text-blue-200">{data.location}</h1>
        </section>
        <section className="flex item-center gap-3">
          <HiBuildingOffice2 className="text-2xl" />
          <h1 className="font-bold dark:text-blue-200">{data.company}</h1>
        </section>
      </div>
    </div>
  );
}

export default Interface;
