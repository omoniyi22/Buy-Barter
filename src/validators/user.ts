const joi = require("@hapi/joi")


module.exports.profileValidator = joi.object().keys({
  full_name: joi.string().min(1),
  spouse_name: joi.string().min(2),
  email: joi.string().email(),
  password: joi.string().min(6),
  phone: joi.number().min(11),
  location: joi.string().min(8),
})