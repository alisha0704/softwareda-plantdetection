// Header.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";


const Header = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const newScrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="relative mx-auto flex flex-row items-center justify-between p-2 md:flex-row">
        <Link href=" / ">
          <div className="flex items-center space-x-3 px-8 py-1">
            <div>
              <Image src="/logo.jpeg" alt="logo" width={50} height={50} />
            </div>
            <div className="py-3 text-2xl font-medium text-black px-3">
              LeafSense
            </div>
          </div>
        </Link>
        <div className="flex-grow"></div>
        <div className="flex items-end justify-end gap-8 space-x-6 text-xl font-medium text-gray-700 px-24">
          <Link href="/">
            {" "}
            {/* Wrap "Home" with Link */}
            <h2 className="hover:text-gray-400">Home</h2>
          </Link>
          <Link href="/AboutUs">
            {" "}
            {/* Wrap "Why Us" with Link */}
            <h2 className="hover:text-gray-400">About Us</h2>
          </Link>
          <Link href="/ContactUs">
            {" "}
            {/* Wrap "About Us" with Link */}
            <h2 className="hover:text-gray-400">Contact Us</h2>
          </Link>
        </div>
        {/* <header>
        <UserButton />
      </header> */}
      </div>
      
    </div>
  );
};

export default Header;
