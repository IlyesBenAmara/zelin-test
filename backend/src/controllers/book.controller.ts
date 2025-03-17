import { Request, Response } from 'express';
import { db } from '../utils/db';
import { TBookID, TBookRead, TBookWrite } from '../models/book';
import { TUserId } from '../models/user';

const getBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookId: TBookID = parseInt(req.params.id, 10);
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

const listBooksByUserId = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId: TUserId = parseInt(req.query.userId as string, 10);
    const books: TBookRead[] | null = await db.book.findMany({
      where: {
        profileId: userId,
      },
      select: {
        id: true,
        title: true,
        genre: true,
      },
    });
    return res.status(200).json({ data: books });
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
};

const updateBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookId: TBookID = parseInt(req.params.id, 10);
    const bookPayload: TBookWrite = req.body;
    const { author, genre, profileId, title, note } = bookPayload;
    const book: TBookRead | null = await db.book.update({
      where: {
        id: bookId,
      },
      data: { author, genre, profileId, title, note },
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
    const { author, genre, profileId, title, note } = bookPayload;
    const book: TBookRead | null = await db.book.create({
      data: { author, genre, profileId, title, note },
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

const deleteBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const bookId: TBookID = parseInt(req.params.id, 10);
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

export default { getBook, listBooksByUserId, updateBook, createBook, deleteBook };
