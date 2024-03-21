import React, { useState } from "react";
import Header from "./components/Common/Header";
import Link from "next/link";

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the feedback to a server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-lime-400 via-lime-300 to-lime-100 min-h-screen">
        <div className="max-w-3xl  mx-auto py-8 px-4  flex">
          <div className="w-full">
            <h1 className="text-2xl text-center font-serif font-bold mb-4">
              INPUT HUB
            </h1>
            <div className="w-full flex font-serif justify-start md:justify-center text-primary-yellow text-xl  font-bold tracking-[1.2px] pt-4 text-left md:text-center">
              We value your input! Share your thoughts and help us improve.
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 pt-12">
              <div>
                <label htmlFor="name" className="block font-serif text-lg mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-serif text-lg mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="feedback"
                  className="block font-serif text-lg mb-4"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={4}
                  value={formData.feedback}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <Link href="/">
              <button
                type="submit"
                className="bg-[#54BD95] hover:bg-green-300 font-serif text-white py-2 px-7 rounded-3xl text-xl transition duration-300"
              >
                Submit
              </button>
              </Link>
            </form>
          </div>
          <div className="w-1/3 px-10 flex justify-center items-center">
            <img src="/feedbackimg.png" alt="image" className="max-w-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
