import { Request, Response } from 'express';
import FAQ from '../models/FAQ';

const isErrorWithMessage = (error: unknown): error is { message: string } => {
    return typeof error === 'object' && error !== null && 'message' in error;
};

export const createFAQ = async (req: Request, res: Response) => {
    try {
        const newFAQ = new FAQ(req.body);
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getFAQs = async (req: Request, res: Response) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};


export const deleteFAQ = async (req: Request, res: Response) => {
    try {
        const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
        if (!deletedFAQ) {
            res.status(404).json({ error: 'FAQ not found' });
        } else {
            res.status(200).json(deletedFAQ);
        }
    } catch (error: unknown) {
        if (isErrorWithMessage(error)) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};