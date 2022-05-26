import { firstCapitalLetter } from "../firstCapitalLetter";

describe("first capital letter test", () => {
  it("returns first capital letter", () => {
    expect(firstCapitalLetter("hello")).toEqual("Hello");
  });
  it("does not return first capital letter", () => {
    expect(firstCapitalLetter("hamburger")).not.toEqual("hamburger");
  });
});
