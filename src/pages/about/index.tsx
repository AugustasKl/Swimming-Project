import Header from "components/layout/header/Header";
import React from "react";
import { Instructors, Partners, Programs } from "./sections";
import Community from "./sections/Community";

const Checkout: React.FC = () => {
  return (
    <>
      <Header />
      <Community />
      <Instructors />
      <Programs/>
      <Partners/>
    </>
  );
};

export default Checkout;
