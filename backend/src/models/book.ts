import { Book } from '@prisma/client';

export type TBookID = Book['id'];
export type TBookRead = Pick<Book, 'id' | 'title' | 'genre'>;
export type TBookWrite = Omit<Book, 'id' | 'createdAt' | 'updatedAt'>;
export type TBookSearch = Pick<Book, 'userId' | 'title'>;
