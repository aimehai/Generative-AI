"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
  }, []);

  return (
    <div
      className={`navbar self-start h-[10vh] z-10 px-40 bg-base-100 sticky top-0 ${
        scrollDown ? "shadow-xl" : ""
      }`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-4xl">Creatixy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/pricing' className=" text-xl mx-2">Pricing</Link>
          </li>
          <li tabIndex={0}>
            <Link href={'/our-service'} className=" text-xl mx-2">Services</Link>
          </li>
          <li>
            <Link href={'/about-us'} className=" text-xl mx-2">About us</Link>
          </li>
          <li>
            <Link href={'/blog'} className=" text-xl mx-2">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn ">Get started</a>
      </div>
    </div>
  );
}

export default Navbar;
