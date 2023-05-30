const joi = require("@hapi/joi")

export const registerValidator = joi.object().keys({
  full_name: joi.string().min(1).required(),
  spouse_name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  phone: joi.number().min(11).required(),
  location: joi.string().min(8).required(),
})


export const emailValidator = joi.object().keys({
  email: joi.string().required(),
})

export const loginValidator = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().min(6).required()
})

export const profileValidator = joi.object().keys({
  full_name: joi.string().min(1),
  spouse_name: joi.string().min(2),
  email: joi.string().email(),
  password: joi.string().min(6),
  phone: joi.number().min(11),
  location: joi.string().min(8),
})