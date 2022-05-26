import answersSlice, {
  initialState,
  setEmail,
  setPrice,
  setQuizAnswers,
} from "./../users/answers-slice";

const reducer = answersSlice.reducer;

test("should return initial state", () => {
  expect(reducer(undefined, setQuizAnswers)).toEqual(initialState);
});

test("updates email state correctly", () => {
  const email = "augustas@gmail.com";
  expect(reducer(initialState, setEmail(email))).toEqual({
    ...initialState,
    email: email,
  });
});

test("updates price state correctly", () => {
  const price = 200;
  expect(reducer(initialState, setPrice(price))).toEqual({
    ...initialState,
    price: price,
  });
});
