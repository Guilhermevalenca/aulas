import api from "../plugins/api";
import { BookType } from "../types/Book";

export default class BookServices {
    static async fetchAll(): Promise<BookType[]> {
        try {
            const { data } = await api.get('/books');
            return data;
        } catch(error) {
            throw error;
        }
    }

    static async create(book: BookType) {
        return api.post('/books', book);
    }

    static async show(id: number | string) { //metodo tbm pode se chamar find (sua preferencia)
        return api.get('/books/' + id);
    }

    static async edit(id: number | string, book: BookType) {
        return api.put('/books/' + id, book);
    }

    static async delete(id: number | string) {
        return api.delete('/books/' + id);
    }
}

