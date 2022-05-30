import { valueNumber } from "../tests/valueNumber"
import { SWIMMING_CLASSES } from  './../../constants/swimmingClasses'


describe('is value a number test',()=>{
    it('value is a number',()=>{
        expect(valueNumber(SWIMMING_CLASSES[0].price)).toBeTruthy()
      
    })
    it('value is not a number',()=>{
        expect(valueNumber(SWIMMING_CLASSES[0].message)).toBeFalsy()
    })
}) 