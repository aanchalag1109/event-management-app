import Joi from 'joi';

export const eventSchema = Joi.object({
  eventName: Joi.string().required(),
  eventDate: Joi.date().iso().required(),
  organizer: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  location: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string().required()
  }).required()
});

export const eventUpdateSchema = Joi.object({
  eventName: Joi.string(),
  eventDate: Joi.date().iso(),
  organizer: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  location: Joi.object({
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.string()
  })
}).min(1); // Require at least one field to update
