import type { Express } from 'express';
import BookController from '@controllers/BookController';

export default function(app: Express) {

    app.get('/', BookController.index);

}