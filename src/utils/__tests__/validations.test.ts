import { validateEmail } from "./../validation"


describe('Email validator',()=>{
    it('returns true if value is correct ',()=>{
        expect(validateEmail('test@yummy.com')).toBeTruthy()
        expect(validateEmail('avc@tdda.com.net')).toBeTruthy()
        expect(validateEmail('avc.avc@zello.com.lt')).toBeTruthy()
    })
    it('returns false if value is incorrect',()=>{
        expect(validateEmail('@tacs.com.lt')).toBeFalsy()
        
    })

})