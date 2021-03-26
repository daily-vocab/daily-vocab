import joi from 'joi';

const wordSchema = joi
  .string()
  .required()
  .error(new Error('this is a required field'))

const usageSchema = joi
  .string()
  .required()
  .error(new Error('this is a required field'))

export const vocabSchema = joi.object({
  word: wordSchema,
  usage: usageSchema
})