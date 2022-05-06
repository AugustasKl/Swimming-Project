import { FlexWrapper, Typography } from "components";
import { BENEFITS } from "constants/benefits";
import React from "react";
import { PlanBenefitsTextItems } from ".";


export const PlanBenefitsText: React.FC = () => {
  return (
    <>
      <FlexWrapper flexDirection="column" gap="0.5rem" justifyContent="center" >
        {BENEFITS.map(({ id, name, text }) => (
          <PlanBenefitsTextItems id={id} key={id} name={name} text={text} />
        ))}
      </FlexWrapper>
    </>
  );
};


