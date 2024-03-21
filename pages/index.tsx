import React from "react";
import Header from "./components/Common/Header";
import Hero from "./components/Uncommon/Hero";
import { UserButton } from "@clerk/nextjs";

const index = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default index;
