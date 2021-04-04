import { vocabSchema } from "./word-validator";

describe('vocabSchema validator', () => {
  describe('should fail', () => {
    test('if word is missing', () => {
      expect(vocabSchema.validate({
        usage: 'j\'apprends le français'
      })).rejects.toThrowError('word is a required field')
    })
  
    test('if usage is missing', () => {
      expect(vocabSchema.validate({
        word: 'apprends'
      })).rejects.toThrowError('usage is a required field')
    })

    test('if usage does not contain the word', () => {
      expect(vocabSchema.validate({
        word: 'apprends',
        usage: 'je suis indien'
      }, { abortEarly: false })).rejects.toThrowError('the usage does not contain the specified word')
    })
  })

  describe('should pass', () => {
    test('if usage contains the word', () => {
      const inputVocab = {
        word: 'apprends',
        usage: 'j\'apprends le français'
      }

      expect(vocabSchema.validate(inputVocab, { abortEarly: false }))
        .resolves.toEqual(inputVocab)
    })
  })
})