import answersSlice, { initialState, setEmail, setPrice, setQuizAnswers } from "./../users/answers-slice"


test('should return initial state', ()=>{
    expect(answersSlice.reducer(undefined, setQuizAnswers)).toEqual(initialState)
})

test('updates email state correctly', ()=>{
    const email='augustas@gmail.com'
    expect(answersSlice.reducer(initialState, setEmail(email))).toEqual({...initialState, email:email})
})

test('updates price state correctly', ()=>{
    const price=200
    expect(answersSlice.reducer(initialState, setPrice(price))).toEqual({...initialState, price:price})
})