import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="body-font min-h-screen py-40 text-black">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left">
            <h1 className="title-font mb-4 text-5xl font-bold text-black">
            From Leaf to Diagnosis: Insight for Healthy Plants.
            </h1>
            <p className="mb-8 text-2xl font-semibold leading-relaxed">
            Harnessing AI to Identify Species and Defend Plant Health.
            </p>
            <Link href="/#tools">
              <div className="container flex items-center justify-center">
                <button className="inline-flex rounded-2xl border-0 bg-[#54BD95] hover:bg-green-300 px-10 py-3 text-2xl text-white focus:outline-none">
                  Get Started 
                </button>
              </div>
            </Link>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              src="/landingleaf-removebg-preview.png"
              width={800}
              height={900}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
