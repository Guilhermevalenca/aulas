import type { Request, Response } from "express";

export default class BookController {
    static async index(req: Request, res: Response) {
        res.status(200)
            .json({
                message: 'Hello World 123'
            });
    }
}