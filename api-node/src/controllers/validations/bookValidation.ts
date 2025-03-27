import BookService from '@services/bookService';
import { z } from 'zod';

export const bookStoreSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const bookUpdateSchema = z.object({
    id: z.number().refine(async (value) => {
        const book = await BookService.show(value);
        return book !== null;
    }),
    title: z.string(),
    description: z.string(),
});