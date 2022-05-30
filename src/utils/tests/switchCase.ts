import { SWIMMING_CLASSES } from "./../../constants/swimmingClasses";

export const switchCase = (answer: string) => {
    switch (answer) {
      case "I want to learn how to swim":
        return SWIMMING_CLASSES[0].title;
  
      case "I want to take my skills to another level":
        return SWIMMING_CLASSES[1].title;
  
      default:
        return null;
    }
  };
  