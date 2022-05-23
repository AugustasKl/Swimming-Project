import React from "react";
import { About, Community, FindRightProgram, Instructors, Partners, Programs } from "./sections";
import Header from "components/layout/header/Header";

const AboutPage: React.FC = () => (
    <>
      <Header/>
      <About/>
      <Programs/>
      <FindRightProgram/>
      <Community/>
      <Instructors/>
      <Partners/>
    </>
  );


export default AboutPage;
