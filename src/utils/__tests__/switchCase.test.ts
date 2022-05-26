import { switchCase } from "./../switchCase";


describe("if switch/case works properly it must return right values", () => {
  it("returns 'McDonalds'", () => {
    expect(switchCase(0)).toEqual('McDonalds');
  });
  it("does not return 'McDonadls' ", () => {
    expect(switchCase(1)).not.toEqual('McDonalds');
  });
});
