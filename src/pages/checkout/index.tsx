import { SliderComponent } from "components";
import Header from "components/layout/header/Header";
import React from "react";
import { useQuery } from "styles/theme";
import { Clients, PlanSection, Pricing, Questions, YouWillGet } from "./sections";
// import PlanSection from './sections/PlanSection'

const Checkout: React.FC = () => {
    const{isMobile}=useQuery()
  return (
    <>
      <Header />
      <PlanSection />
      <Pricing />
    <Clients />
      <YouWillGet />
      <Questions/>
    </>
  );
};

export default Checkout;
