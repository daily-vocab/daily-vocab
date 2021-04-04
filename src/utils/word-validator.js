import * as yup from 'yup';

const wordSchema = yup
  .string()
  .required('word is a required field')

const usageSchema = yup
  .string()
  .required('usage is a required field')
  .test('contains',
    'the usage does not contain the specified word',
    (usage, context) => {
      const { word } = context.parent
      if (usage && word) return usage.includes(word)
      return true;
  })

export const vocabSchema = yup.object({
  word: wordSchema,
  usage: usageSchema
})