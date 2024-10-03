import { Request, Response } from 'express';
import Career from '../models/Career';

const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};

export const createCareer = async (req: Request, res: Response) => {
    try {
        const newCareer = new Career(req.body);
        await newCareer.save();
        res.status(201).json(newCareer);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getCareers = async (req: Request, res: Response) => {
    try {
        const careers = await Career.find();
        res.status(200).json(careers);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const deleteCareer = async (req: Request, res: Response) => {
    try {
        const deletedCareer = await Career.findByIdAndDelete(req.params.id);
        if (!deletedCareer) {
            res.status(404).json({ error: 'Career not found' });
        } else {
            res.status(200).json(deletedCareer);
        }
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
