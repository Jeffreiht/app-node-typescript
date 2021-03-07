import { Router } from 'express';
import { booksController } from '../controllers/books.controller'

const router = Router();

router.get('/', booksController.indexBook);
router.get('/add', booksController.renderBooks);
router.post('/add', booksController.saveBook)


export default router;