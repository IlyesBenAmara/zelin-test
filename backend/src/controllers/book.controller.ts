import { Request, Response } from 'express';
import { db } from '../utils/db';
import { TBookID, TBookRead, TBookSearch, TBookWrite } from '../models/book';

const getBook = async (req: Request, res: Response): Promise<any> => {
  try {
                    const bookId: TBookID = +req.params.id;
                    const book: TBookRead | null = await db.book.findUnique({
                      where: {
                        id: bookId,
                      },
                      select: {
                        id: true,
                        title: true,
                        genre: true,
                      },
                    });
    return res.status(200).json({ data: book });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

const listUserBooks = async (req: Request, res: Response): Promise<any> => {
  try {
    const { userId, title }: TBookSearch = req.body;

    const searchQuery =
      title === ''
        ? { userId }
        : {
            userId,
            title: {
              contains: title,
            },
          };
    const books: TBookRead[] | null = await db.book.findMany({
      where: {
        ...searchQuery,
      },
      select: {
        id: true,
        title: true,
        genre: true,
        note: true,
      },
    });
    return res.status(200).json({ data: books });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookId: TBookID = +req.params.id;
    const bookPayload: TBookWrite = req.body;
    const { author, genre, userId, title, note } = bookPayload;
    const book: TBookRead | null = await db.book.update({
      where: {
        id: bookId,
      },
      data: { author, genre, userId, title, note },
      select: {
        id: true,
        title: true,
        genre: true,
        note: true,
      },
    });
    return res.status(200).json({ data: book });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

const createBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookPayload: TBookWrite = req.body;
    const { author, genre, userId, title, note } = bookPayload;
    const book: TBookRead | null = await db.book.create({
      data: { author, genre, userId, title, note },
      select: {
        id: true,
        title: true,
        genre: true,
      },
    });
    return res.status(201).json({ data: book });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookId: TBookID = +req.params.id;
    const book: TBookRead | null = await db.book.delete({
      where: {
        id: bookId,
      },
      select: {
        id: true,
        title: true,
        genre: true,
      },
    });
    return res.status(200).json({ data: book });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

export default {
  getBook,
  listUserBooks,
  updateBook,
  createBook,
  deleteBook,
};
