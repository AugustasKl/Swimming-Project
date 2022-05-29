import { emailValidation } from "../emailValidation";


describe("check if email input contains '@' symbol ", () => {
  it("returns true if it does have @ symbol", () => {
    expect(emailValidation('augustas@gmail.com')).toBeTruthy();
  });
  it("returns false if it doesn't have '@' symbol", () => {
    expect(emailValidation("augustas!gmail.com")).toBeFalsy();
  });
});
