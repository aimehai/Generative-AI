import Image from "next/image";
import React from "react";

function Headline() {
  return (
    <div className="flex space-x-60 items-center ">
      <div>
        <div className={` font-semibold text-5xl `}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Revolutionize Your Content
          </span>
          <br />
          with Our AI Solution!
        </div>
        <div className=" text-xl mt-8">
          Transform your content creation process with seamless, efficient, and
          tailored AI-powered tools.
        </div>
        <button
          type="button"
          className="mt-8 w-40 h-14 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 hover:scale-110"
        >
          Get started
        </button>
      </div>
      <Image
        src="https://katzchwat.com/wp-content/uploads/2017/10/digital-asset.jpg"
        alt="title"
        height={600}
        width={700}
        className="rounded-3xl"
      />
    </div>
  );
}

export default Headline;
