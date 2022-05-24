import React from "react";
import {Clients, Message, OrderInformation, PlanSection, Pricing, Questions, QuizSelection, YouWillGet} from "./sections";
import { Header } from "components";




const Checkout: React.FC = () =>  (
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


export default Checkout;
