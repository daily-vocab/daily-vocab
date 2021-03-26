import { wordSchema } from "./word-validator";

describe('wordSchema validator', () => {
  describe('should fail', () => {
    test('if word is missing', () => {
      const { error } = wordSchema.validate({
        usage: 'j\'apprends le français'
      })

      expect(error).toBeTruthy()
      expect(error.message).toBe('"word" is required')
    })

    test('if usage is missing', () => {
      const { error } = wordSchema.validate({
        word: 'apprends'
      })

      expect(error).toBeTruthy()
      expect(error.message).toBe('"usage" is required')
    })
  })
})