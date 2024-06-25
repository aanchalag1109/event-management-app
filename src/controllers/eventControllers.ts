import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import EventModel, { IEvents } from '../models/events';
import { eventSchema, eventUpdateSchema } from '../validations/eventValidation';

// Add a new event
export const addEvent = async (req: Request, res: Response) => {
    try {
        const { error, value } = eventSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const newEvent: IEvents = value;
        const createdEvent = await EventModel.create(newEvent);
        res.status(201).json(createdEvent);
    } catch (err) {
        console.error('Error adding event:', err);
        res.status(500).json({ message: 'Failed to add event' });
    }
};

// Get event by ID
export const getEventById = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    try {
        const event = await EventModel.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (err) {
        console.error('Error fetching event by ID:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an existing event
export const updateEvent = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    try {
        const { error, value } = eventUpdateSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const updatedEventData: IEvents = value;
        updatedEventData.updatedAt = new Date();
        const updatedEventDoc = await EventModel.findByIdAndUpdate(eventId, updatedEventData, { new: true });
        if (!updatedEventDoc) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(updatedEventDoc);
    } catch (err) {
        console.error('Error updating event:', err);
        res.status(500).json({ message: 'Failed to update event' });
    }
};

// Delete an event
export const deleteEvent = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    try {
        const result = await EventModel.findByIdAndDelete(eventId);
        if (!result) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.sendStatus(204);
    } catch (err) {
        console.error('Error deleting event:', err);
        res.status(500).json({ message: 'Failed to delete event' });
    }
};

// Get all events with optional filters
export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const filter: any = {};
        if (req.query.organizer) {
            filter.organizer = req.query.organizer as string;
        }
        const events = await EventModel.find(filter);
        res.json(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

