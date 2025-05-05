import React from "react";
import Hconback from "./../assets/hconback.png";
import EarthCom from "./../assets/earthcom.gif";


const HContact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Hconback})`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-7 gap-4 content-center items-center my-16">
          <div className="col-span-4">
            <div className="max-w-lg md:max-w-none ml-18">
              <span className="font-bold text-xl bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
                LET'S CONNECT
              </span>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Get In Touch
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center dark">
              <div className="w-full max-w-md bg-[#635AD9] rounded-lg shadow-md p-6 m-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  How May We Help You !
                </h2>
                <form className="flex flex-wrap">
                  <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Company Name"
                  />
                  <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                    placeholder="Job Title"
                  />
                  <input
                    type="date"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                    placeholder="Date of Birth"
                  />
                  <textarea
                    name="message"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>

          <div className="col-span-1 bottom-0">
            <img src={EarthCom} alt="" className="h-44 w-auto align-bottom" />
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HContact;
