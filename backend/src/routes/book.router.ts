import { Router } from 'express';
import BookController from '../controllers/book.controller';

const router = Router();

router.get('/:id', BookController.getBook);

router.post('/', BookController.listUserBooks);

router.post('/', BookController.createBook);

router.put('/:id', BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

export default router;
