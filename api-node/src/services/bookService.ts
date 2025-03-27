import { IBook } from "@interfaces/IBook";
import BookModel from "@models/BookModel";

export default class BookService {
    static async index() {
        return BookModel.findAll();
    }

    static async create(book: IBook) {
        return BookModel.create({
            title: book.title,
            description: book.description,
        });
    }

    static async show(id: number) {
        return BookModel.findByPk(id);
    }

    static async update(id: number, book: IBook) {
        return BookModel.update({
                title: book.title,
                description: book.description,
            },
            {
                where: {
                    id,
                }
            }
        );
    }

    static async destroy(id: number) {
        return BookModel.destroy({
            where: {
                id,
            }
        });
    }
}