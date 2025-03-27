import type { Express } from 'express';
import BookController from '@controllers/BookController';

export default function(app: Express) {

    app.route('/books')
        .get(BookController.index)
        .post(BookController.store);

    app.route('/books/:id')
        .get(BookController.show)
        .put(BookController.update)
        .delete(BookController.destroy);

}