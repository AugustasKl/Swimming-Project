import { valueNumber } from "./../valueNumber"



describe('is value a number test',()=>{
    it('returns number',()=>{
        expect(valueNumber(2)).toBeTruthy()
      
    })
    it('does not return number',()=>{
        expect(valueNumber('hello, mate')).toBeFalsy()
        
    })

}) 