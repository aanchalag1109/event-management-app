import { Request, Response, NextFunction } from 'express';
import { eventSchema, eventUpdateSchema } from '../validations/eventValidation';

export const validateEvent = (req: Request, res: Response, next: NextFunction) => {
  const schema = req.method === 'POST' ? eventSchema : eventUpdateSchema;
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
