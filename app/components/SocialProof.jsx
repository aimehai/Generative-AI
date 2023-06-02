import Image from "next/image";
import React from "react";

function SocialProof() {
  return (
    <div className="h-full w-full grid grid-rows-2 ">
      <div className=" flex items-center mx-60 space-x-10">
        <div className="w-[75%]">
          <div className="text-5xl font-bold">Beyond Your Imagination</div>
          <div className="mt-5 text-xl">
            Creatixy has been a true game-changer! Our content generation is now
            more efficient, engaging, and personalized. We&#39;re thrilled with
            the results!
          </div>
        </div>
        <div className="px-4 w-[25%] flex flex-col justify-center">
          <div className="w-40 h-40 overflow-hidden rounded-full flex items-center">
            <Image src={"/proof-1.jpg"} alt="" width={160} height={160} />
          </div>
          <div className="text-3xl font-bold mt-3">David Joshua</div>
          <div className="text-xl text-gray-400">Co-founder of Plastiq</div>
        </div>
      </div>
      <div className=" flex items-center mx-60 space-x-10">
        <div className="w-[75%]">
          <div className="text-5xl font-bold">
            AI Made Us More Creative, and We&#39;re Loving It!
          </div>
          <div className="mt-5 text-xl">
            This AI solution revolutionized our content creation process. It
            boosted efficiency and unlocked new levels of creativity for our
            team - a transformation we didn&#39;t know we needed!
          </div>
        </div>
        <div className="px-4 w-[25%] flex flex-col justify-center">
          <div className="w-40 h-40 overflow-hidden rounded-full flex items-center">
            <Image src={"/proof-2.jpg"} alt="" width={160} height={160} />
          </div>
          <div className="text-3xl font-bold mt-3">Mia Jones</div>
          <div className="text-xl text-gray-400">
            Influencer with 1.6M followers
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default SocialProof;
