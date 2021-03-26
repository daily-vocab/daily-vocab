import { vocabSchema } from "./word-validator";

describe('vocabSchema validator', () => {
  describe('should fail', () => {
    test('if word is missing', () => {
      const { error } = vocabSchema.validate({
        usage: 'j\'apprends le français'
      })

      expect(error).toBeTruthy()
      expect(error.message).toBe('this is a required field')
    })
  
    test('if usage is missing', () => {
      const { error } = vocabSchema.validate({
        word: 'apprends'
      })
      
      expect(error).toBeTruthy()
      expect(error.message).toBe('this is a required field')
    })
  })
})