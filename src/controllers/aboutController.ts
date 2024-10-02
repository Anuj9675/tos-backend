import { Request, Response } from 'express';
import About from '../models/About';

const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};

export const createAbout = async (req: Request, res: Response) => {
    try {
        const newAbout = new About(req.body);
        await newAbout.save();
        res.status(201).json(newAbout);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getAbout = async (req: Request, res: Response) => {
    try {
        const about = await About.find();
        res.status(200).json(about);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
