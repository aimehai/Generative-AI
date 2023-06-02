import React from "react";
import { IoLanguageOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineComputerDesktop size={70} />,
    title: "Intuitive Interface",
    subtitle:
      "Easy to navigate and use, even with no prior experience in AI tools.",
  },
  {
    icon: <HiOutlinePencilAlt size={70} />,
    title: "Quick Content Generation",
    subtitle: "Generate articles, blogs, or scripts within minutes.",
  },
  {
    icon: <IoSettingsOutline size={70} />,
    title: "Style Adaptability",
    subtitle: "Our AI learns your style for personalized content creation.",
  },
  {
    icon: <IoLanguageOutline size={70} />,
    title: "Multi-language Support",
    subtitle: "Create content in multiple languages with just a click.",
  },
];

function Features() {
  return (
    <div className="w-full h-[70%] ">
      <div>
        <div className="text-5xl text-center font-semibold">
          The Value We Bring to You
        </div>
        <div className="text-2xl text-center mt-5">
          Empowering creativity and productivity with AI-driven solutions.
        </div>
      </div>
      <div className="flex justify-between mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${index !== 3 ? 'border-r-2 border-slate-400' : ''}  w-[25%] flex items-center flex-col`}
          >
            <div>
              <div>{feature.icon}</div>
            </div>
            <div className="mt-10 flex items-center flex-col">
              <div className="font-bold text-2xl ">{feature.title}</div>
              <div className="mt-2 text-center mx-6">{feature.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-28 w-full flex justify-center">
        <button className="btn flex border-none bg-gradient-to-r from-violet-400 to-blue-600">
          Try 30 day-trial
        </button>
      </div>
    </div>
  );
}

export default Features;
