import Header from "components/layout/header/Header";
import React from "react";
import { About, FindRightProgram, Instructors, Partners, Programs } from "./sections";
import Community from "./sections/Community";


const Checkout: React.FC = () => {
  return (
    <>
      <Header />
      <About/>
      <Community />
      <Instructors />
      <Programs/>
      <FindRightProgram/>
      <Partners/>
    </>
  );
};

export default Checkout;
