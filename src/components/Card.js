import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-slate-200">
      <div className="border border-gray-300 break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[17rem] p-4 mb-4 bg-white text-black  dark:text-white">
        <div className="flex items-center justify-between font-medium">
          <div className="text-m text-violet-800 rounded-full bg-violet-100 px-5 py-2">
            User Interface
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <span className="font-bold text-black text-xl">
            Service Page Website
          </span>
        </div>
        <div className="text-black text-left text-xs">
          Make a page display about services for websites company with blue and
          red colors
        </div>

        <div className="flex justify-end items-center">
          <img
            className="w-3"
            src="https://img.freepik.com/free-icon/check_318-749914.jpg"
            alt="#/"
          />
          <div className=" ml-1 w-2 text-black mr-20 text-xs">0/20</div>
          <div>
            <div className="flex -space-x-1.5">
              <a href="#/" className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://randomuser.me/api/portraits/women/46.jpg"
                  alt="avatar"
                />
              </a>
              <a href="#/" className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar"
                />
              </a>
              <a href="#/" className="inline-block -m-1">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://randomuser.me/api/portraits/women/47.jpg"
                  alt="avatar"
                />
              </a>
            </div>
          </div>
          <button className="flex justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-blue-400 ml-2">
            <div>Invite</div>
          </button>
        </div>
        <div className="flex item-stretch text-xs font-small rounded-full px-4 py-3 space-x-1 bg-white border border-gray-200 divide-x">
          <div className="text-gray-600 mr-1 ">
            <button className="w-2 h-2 mr-1 rounded-full font-small bg-black hover:bg-red-500 text-white"></button>
            4 Attachement
          </div>
          <div className="text-gray-600 px-2 ">
          <button className="w-2 h-2 mr-1 rounded-full font-small bg-black hover:bg-red-500 text-white"></button>
            10 Comment
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
