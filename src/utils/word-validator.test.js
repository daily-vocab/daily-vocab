import { vocabSchema } from "./word-validator";

describe('vocabSchema validator', () => {
  describe('should fail', () => {
    test('if word is missing', () => {
      expect(vocabSchema.validate({
        usage: 'j\'apprends le français'
      })).rejects.toThrowError('this is a required field')
    })
  
    test('if usage is missing', () => {
      expect(vocabSchema.validate({
        word: 'apprends'
      })).rejects.toThrowError('this is a required field')
    })

    test('if usage does not contain the word', () => {
      expect(vocabSchema.validate({
        word: 'apprends',
        usage: 'je suis indien'
      }, { abortEarly: false })).rejects.toThrowError('the sentence does not contain the specified word')
    })
  })
})