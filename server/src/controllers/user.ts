import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
        username: 'bode',
    });
};
