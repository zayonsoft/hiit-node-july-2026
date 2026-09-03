import Joi from "joi";

export const studentValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string().required().min(11).max(13),
});
