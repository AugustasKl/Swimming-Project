import Header from "components/layout/header/Header";
import React from "react";
import { Instructors, Partners } from "./sections";
import Community from "./sections/Community";

const Checkout: React.FC = () => {
  return (
    <>
      <Header />
      <Community />
      <Instructors />
      <Partners/>
    </>
  );
};

export default Checkout;
