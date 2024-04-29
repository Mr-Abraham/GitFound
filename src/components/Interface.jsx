import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";

function Interface({ data }) {
  return (
    <div>
      <div className="flex justify-between items-start  gap-2 p-2 m-2">
        <section>
          <img
            src={data.avatar_url}
            alt="Github User Image"
            className="rounded-full"
            width={300}
          />
          <p className="text-center mt-5 font-semibold text-gray-500">
            Joined : January 2019
          </p>
        </section>
        <section className="justify-self-end px-5 mt-5 ml-6">
          <h1 className="text-6xl font-extrabold text-blue-950 mb-3">
            {data.name}
          </h1>
          <h3 className="text-xl font-semibold text-slate-600 mb-3">
            @{data.login}
          </h3>
          <p className="text-xl font-bold text-gray-500 ">{data.bio}</p>
        </section>
      </div>
      <div className="flex justify-between items-center py-3 px-10 mb-3 mt-2 bg-slate-700 rounded-xl text-white">
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
          <h1 className="font-semibold">@{data.twitter_username}</h1>
        </section>
        <section className="flex items-center gap-2">
          <FaLink className="text-2xl text-blue-900 font-semibold " />{" "}
          <a href={data.blog} target="_blank">
            {data.blog}
          </a>
        </section>
        <section className="flex items-center gap-2">
          <FaLocationDot className="text-2xl text-red-400 font-semibold " />
          <h1 className="font-semibold">{data.location}</h1>
        </section>
        <section className="flex item-center gap-3">
          <HiBuildingOffice2 className="text-2xl" />
          <h1 className="font-bold">{data.company}</h1>
        </section>
      </div>
    </div>
  );
}

export default Interface;
