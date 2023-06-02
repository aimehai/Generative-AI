"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Headline from "./components/Headline";
import styles from "./styles.module.css";
import ValueProposition from "./components/ValueProposition";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);

  return (
    <div className="h-full font-Varela_round flex flex-col ">
      <div className=" -z-10 fixed h-[100vh] w-[100vw]">
        <Image
          src={
            "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7130469.jpg&fm=jpg"
          }
          alt="asd"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Headline */}
      <div
        className={`${
          styles.section
        } transition-all duration-500 ease-in-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Headline />
      </div>

      {/* Value proposition */}
      <div className={`${styles.section} `}>
        <ValueProposition />
      </div>

      {/* Features & Benefits */}
      <div className={`${styles.section}`}>
        <Features />
      </div>

      {/* Social proof */}
      <div className={`${styles.section}`}>
        <SocialProof />
      </div>

      {/* Pricing */}

      {/* FAQ */}
      <div
        className={` min-h-[43%] w-full bg-red-100 flex justify-center px-96 `}
      >
        <FAQSection />
      </div>

      {/* Ending */}
    </div>
  );
}

export default Home;
