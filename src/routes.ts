import express from 'express';
import * as eventController from './controllers/eventControllers';
const router = express.Router();
router.get('/events', eventController.getAllEvents);
router.get('/events/:id', eventController.getEventById);
router.post('/events', eventController.addEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);
export default router;
