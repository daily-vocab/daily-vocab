import joi from 'joi';

export const wordSchema = joi.object({
  word: joi.string().required(),
  usage: joi.string().required(),
});