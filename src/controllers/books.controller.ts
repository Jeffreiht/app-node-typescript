import { Request, Response } from 'express'

import BookModel, { Book } from '../models/Book'

class BooksController {

    public async indexBook(req: Request, res: Response){
        const books = await BookModel.find({});
        console.log(books)
        res.render('books/books', {title: 'books', books})
    }

    public renderBooks(req: Request, res: Response): void {
        res.render('books/addBook', {title: "add a book"})
    }

    public async saveBook(req: Request, res: Response){
        const {title, author, isbn} = req.body;
        const newBook: Book = new BookModel({
            title,
            author,
            isbn
        });
        await newBook.save()
        res.redirect('/books')
    }

}

export const booksController = new BooksController();