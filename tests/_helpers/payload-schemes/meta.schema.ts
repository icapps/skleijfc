import * as Joi from 'joi';

export const codeTypeSchema = Joi.object({
  id: Joi.string().guid().required(),
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().allow(null),
  createdAt: Joi.date().iso().raw(),
  updatedAt: Joi.date().iso().raw(),
});

export const codeTypesSchema = Joi.object().keys({
  meta: Joi.object().keys({
    type: Joi.string().required().only('codeTypes'),
    count: Joi.number().required(),
    totalCount: Joi.number().required(),
  }),
  data: Joi.array().items(codeTypeSchema),
});

export const codeSchema = Joi.object({
  id: Joi.string().guid().required(),
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().allow(null),
  isActive: Joi.boolean().allow(null),
  createdAt: Joi.date().iso().raw(),
  updatedAt: Joi.date().iso().raw(),
});

export const codesSchema = Joi.object().keys({
  meta: Joi.object().keys({
    type: Joi.string().required().only('codes'),
    count: Joi.number().required(),
    totalCount: Joi.number().required(),
  }),
  data: Joi.array().items(codeSchema),
});

export const createCodeSchema = Joi.object().keys({
  meta: Joi.object().keys({
    type: Joi.string().required().only('codes'),
  }),
  data: codeSchema,
});
