import { SliderComponent } from "components";
import Header from "components/layout/header/Header";
import React from "react";
import { useQuery } from "styles/theme";
import {
  Clients,
  Message,
  OrderInformation,
  PlanSection,
  Pricing,
  Questions,
  QuizSelection,
  YouWillGet,
} from "./sections";
// import PlanSection from './sections/PlanSection'

const Checkout: React.FC = () => {
  const { isMobile } = useQuery();
  return (
    <>
      <Header />
      <QuizSelection/>
      <Pricing />
      <PlanSection />
      <Clients />
      <Questions />
      <YouWillGet />
      <Message />
      <Pricing />
      <OrderInformation />
    </>
  );
};

export default Checkout;
