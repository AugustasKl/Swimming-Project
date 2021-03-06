
import { nextQuestion } from "../tests/nextQuestion";

describe("check if nextQuestion handler correctly changes questions", () => {
  it("returns next question", () => {
    expect(nextQuestion(1)).toEqual(2);
  });
  it("does not return next question", () => {
    expect(nextQuestion(1)).not.toEqual(3);
  });
});
