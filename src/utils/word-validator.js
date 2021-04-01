import * as yup from 'yup';

const wordSchema = yup
  .string()
  .required('this is a required field')

const usageSchema = yup
  .string()
  .required('this is a required field')
  .matches(new RegExp(`${yup.ref('word')}`), {
    excludeEmptyString: true,
    message:'the sentence does not contain the specified word'
  })

export const vocabSchema = yup.object({
  word: wordSchema,
  usage: usageSchema
})