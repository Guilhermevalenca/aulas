import BookService from "@services/bookService";
import type { Request, Response } from "express";
import { bookStoreSchema, bookUpdateSchema } from "./validations/bookValidation";

export default class BookController {
    static async index(req: Request, res: Response) {
        try {
            const books = await BookService.index();
            res.status(200)
                .json(books);
        } catch(error) {
            res.status(400)
                .send(error);
        }
    }

    static async store(req: Request, res: Response) {
        const { error } = bookStoreSchema.safeParse(req.body);
        if(error) {
            res.status(400)
                .send(error);
            return;
        }
        try {
            const book = await BookService.create(req.body);
            res.status(201)
                .json(book);
        } catch(error) {
            res.status(400)
                .send(error);
        }
    }

    static async show(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(404)
                .send();
            return;
        }
        try {
            const book = await BookService.show(Number(id));
            res.status(200)
                .json(book);
        } catch(error) {
            res.status(400)
                .send(error);
        }
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(404)
                .send();
            return;
        }
        const { error, success } = await bookUpdateSchema.safeParseAsync({
            ...req.body,
            id: Number(id),
        });
        if(!success) {
            res.status(400)
                .send(error);
            return;
        }
        try {
            const book = await BookService.update(Number(id), req.body);
            res.status(200)
                .json(book);
        } catch(error) {
            res.status(400)
                .send(error);
        }
    }

    static async destroy(req: Request, res: Response) {
        const { id } = req.params;
        if(!id) {
            res.status(404)
                .send();
            return;
        }
        try {
            const book = await BookService.destroy(Number(id));
            res.status(200)
                .json(book);
        } catch(error) {
            res.status(400)
                .send(error);
        }
    }
}