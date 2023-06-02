"use client";

import React, { useState } from "react";
import { FAQ } from "./FAQ";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
function FAQSection() {
  const [open, setOpen] = useState(new Array(FAQ.length).fill(false));

  const toogleButton = (index) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="mt-14 mb-7 w-[80%]">
      <div className="text-5xl font-bold flex justify-center">FAQ</div>
      <div className="mt-10 space-y-7 w-full">
        {FAQ.map((faq, id) => (
          <div
            key={id}
            className={` ${
              id !== 3 ? "border-b border-b-gray-700" : ""
            } flex space-x-5 justify-between pb-5`}
          >
            <div className="flex flex-col justify-between w-full">
              <div className="font-bold text-xl">{faq.question}</div>
              <div
                className={` text-lg pt-2 overflow-hidden transition-all ease-out duration-300 ${
                  open[id] ? " max-h-[120px]" : "max-h-0"
                }`}
              >
                <span className="font-bold">{faq.answer1}</span> {faq.answer2}
              </div>
            </div>
            <div className="flex items-start">
              <button
                onClick={() => toogleButton(id)}
                className={`transition-transform duration-500 ease-in-out  ${
                  open[id] ? "rotate-0" : "rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
