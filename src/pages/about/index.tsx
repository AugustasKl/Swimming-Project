import Header from "components/layout/header/Header";
import React from "react";
import { About, FindRightProgram, Instructors, Partners, Programs } from "./sections";
import Community from "./sections/Community";


const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <About/>
      <Programs/>
      <FindRightProgram/>
      <Community />
      <Instructors />
      <Partners/>
    </>
  );
};

export default AboutPage;
