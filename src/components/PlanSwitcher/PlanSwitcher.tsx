import React from "react";
import { SelectedPlan } from "../../pages/checkout/elements";
import { SWIMMING_CLASSES } from "constants/swimmingClasses";

export const PlanSwitcher: React.FC<{ answer: string }> = ({ answer }) => {
  const planHandler = (answer: string) => {
    switch (answer) {
      case "I want to learn how to swim":
        return (
          <SelectedPlan
            title={SWIMMING_CLASSES[0].title}
            enrolled={SWIMMING_CLASSES[0].enrolled}
            lessonCount={SWIMMING_CLASSES[0].lessonCount}
          />
        );
      case "I want to take my skills to another level":
        return (
          <SelectedPlan
            title={SWIMMING_CLASSES[1].title}
            enrolled={SWIMMING_CLASSES[1].enrolled}
            lessonCount={SWIMMING_CLASSES[1].lessonCount}
          />
        );
      case "I want to become a Olympic superstar":
        return (
          <SelectedPlan
            title={SWIMMING_CLASSES[2].title}
            enrolled={SWIMMING_CLASSES[2].enrolled}
            lessonCount={SWIMMING_CLASSES[2].lessonCount}
          />
        );
      default:
        return null;
    }
  };

  return <>{planHandler(answer)}</>;
};
