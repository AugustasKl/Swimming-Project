import { switchCase } from "./../switchCase";


describe("if switch/case works properly it must return right values", () => {
  it("returns 'McDonalds'", () => {
    expect(switchCase("I want to learn how to swim")).toEqual('Swimming class for beginners');
  });
  it("does not return 'McDonadls' ", () => {
    expect(switchCase("I want to take my skills to another level")).not.toEqual('Swimming class for beginners');
  });
});
