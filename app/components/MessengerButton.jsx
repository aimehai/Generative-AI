"use client";

import React from "react";
import { SiMessenger } from "react-icons/si";

function MessengerButton() {
  return (
    <div className="bg-white sticky bottom-10 right-10">
      <button className="">
        <SiMessenger size={50} />
      </button>
    </div>
  );
}

export default MessengerButton;
