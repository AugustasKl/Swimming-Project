import { valueNumber } from "./../valueNumber"
import { SWIMMING_CLASSES } from "../../constants/swimmingClasses";


describe('is value a number test',()=>{
    it('returns number',()=>{
        expect(valueNumber(SWIMMING_CLASSES[0].price)).toBeTruthy()
      
    })
    it('does not return number',()=>{
        expect(valueNumber(SWIMMING_CLASSES[0].message)).toBeFalsy()
        
    })

}) 