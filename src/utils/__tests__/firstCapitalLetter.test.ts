import { ABOUT } from "../../constants/about";
import { COMMUNITY } from "../../constants/community";
import { firstCapitalLetter } from "../tests/firstCapitalLetter";

describe("first capital letter test", () => {
  it("returns first capital letter", () => {
    expect(firstCapitalLetter(ABOUT[0].text)).toEqual("Experienced staff");
  });
  it("does not return first capital letter", () => {
    expect(firstCapitalLetter(COMMUNITY[0].text)).not.toEqual('of our members said that Swimclub has one of the most expereinced staff members');
  });
});
