import React from "react";
import { BENEFITS } from "constants/benefits";
import { PlanBenefitsTextItems } from ".";
import { FlexWrapper} from "components";


export const PlanBenefitsText: React.FC = () => (
    <>
      <FlexWrapper flexDirection="column" gap="0.5rem" justifyContent="center" >
        {BENEFITS.map(({ id, name, text }) => (
          <PlanBenefitsTextItems id={id} key={id} name={name} text={text} />
        ))}
      </FlexWrapper>
    </>
  );



