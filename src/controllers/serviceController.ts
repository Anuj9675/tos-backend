import { Request, Response } from 'express';
import Service from '../models/Service';

const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};

export const createService = async (req: Request, res: Response) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json(newService);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
