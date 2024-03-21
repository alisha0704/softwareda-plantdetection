import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Common/Header";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <>
      <div
        id="contact"
        className="bg-gradient-to-r from-lime-400 via-lime-300 to-lime-100 py-6 h-full max-md:px-5 lg:px-[250px] px-[50px] md:px-[100px]"
      >
        <div className="font-serif t text-xl flex justify-start md:justify-center font-bold tracking-wide">
          CONTACT US
        </div>
        <div className="w-full flex justify-start md:justify-center text-primary-yellow text-xl  font-bold tracking-[1.2px] pt-4 text-left md:text-center">
          Feel free to reach out to us <br /> incase of any queries/enquiries.
        </div>

        <div className="flex justify-center flex-col lg:flex-row items-start gap-8 lg:gap-8 pt-12">
          <form
            className="bg-transparent rounded max-sm:px-4 md:pr-10 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-6 mt-2 ">
              <label
                className="block text-primary-text font-arial text-md tracking-[0.56px] font-bold mb-2"
                htmlFor="name"
              >
                Your Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-[280px] md:w-[540px] py-2 md:py-4 px-6 text-black leading-tight focus:outline-none focus:shadow-outline custom-placeholder"
                id="name"
                required
                type="text"
                placeholder="Type it here"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-primary-text font-arial tracking-[0.56px]   text-md font-bold mb-2"
                htmlFor="email"
              >
                Enter Your Phone No.*
              </label>
              <input
                className="shadow appearance-none border rounded w-[280px]  md:w-[540px] py-2 md:py-4 px-6 text-black leading-tight focus:outline-none focus:shadow-outline custom-placeholder"
                id="phone"
                required
                type="tel"
                placeholder="Type it here"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block   text-primary-text font-arial tracking-[0.56px]  text-md font-bold mb-2"
                htmlFor="email"
              >
                Enter Your Email ID.*
              </label>
              <input
                className="shadow appearance-none border rounded w-[280px]  md:w-[540px] py-2 md:py-4 px-6 text-black leading-tight focus:outline-none focus:shadow-outline custom-placeholder"
                id="email"
                required
                type="email"
                placeholder="Type it here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-12">
              <label
                className="block text-primary-text font-arial tracking-[0.56px]  text-md font-bold mb-2"
                htmlFor="email"
              >
                Enter Your Message*
              </label>
              <textarea
                className="shadow appearance-none border rounded w-[280px]  md:w-[540px] py-2 md:py-4 px-6 text-black leading-tight focus:outline-none focus:shadow-outline custom-placeholder"
                id="message"
                required
                placeholder="Type it here"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="px-16 py-2 bg-[#54BD95] hover:bg-green-300 rounded-3xl justify-center items-center gap-2.5 inline-flex  focus:shadow-outline font-extrabold"
                type="submit"
              >
                <div className="text-black text-lg text-center font-extrabold font-arial tracking-[0.64px]">
                  Submit
                </div>
              </button>
            </div>
          </form>
          <div className="grid grid-cols-2 gap-4 max-sm:px-[6px] py-4 lg:py-16  lg:gap-8">
            <div className="px-3 py-5 bg-[#54BD95] hover:bg-green-300 rounded-lg flex-col justify-center md:justify-start items-start gap-2 md:gap-3 lg:gap-3.5 inline-flex">
              <Link href="">
                <div className="flex-col justify-start items-start gap-14 flex">
                  <div className="w-6 h-5">
                    <Image
                      src="/Inquiry.jpeg"
                      alt=""
                      width={25}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="flex-col justify-start items-start  flex">
                      <div className="text-black font-arial text-md font-bold block tracking-[0.56px] ">
                        Inquiry
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="px-3 py-5 bg-[#54BD95] hover:bg-green-300 rounded-lg flex-col justify-start items-start gap-2 md:gap-3 lg:gap-3.5  inline-flex">
              <Link href="">
                <div className="flex-col justify-start items-start gap-14 flex">
                  <div className="w-6 h-5 relative">
                    <Image
                      src="/support.jpeg"
                      alt="GitHub"
                      width={45}
                      height={70}
                      layout="fixed"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="flex-col justify-start items-start  flex">
                      <div className="text-black text-md font-arial font-bold block tracking-[0.56px] ">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="px-4 py-5 bg-[#54BD95] hover:bg-green-300 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
              <Link href="">
                <div className="flex-col justify-start items-start gap-14 flex">
                  <div className="w-6 h-5 relative">
                    <Image
                      src="/coolab.jpg"
                      alt="linkedin"
                      width={25}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="flex-col justify-start items-start flex">
                      <div className="text-black text-md font-arial font-bold block tracking-[0.56px] ">
                        Collaboration
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="px-4 py-5 bg-[#54BD95] hover:bg-green-300 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
              <Link href="">
                <div className="flex-col justify-start items-start gap-14 flex">
                  <div className="w-6 h-5 relative">
                    <Image
                      src="/assistance.jpeg"
                      alt="twitter"
                      width={25}
                      height={20}
                      layout="fixed"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="flex-col justify-start items-start flex">
                      <div className="text-black text-md font-bold block tracking-[0.56px] ">
                        Assitance
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
