export interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  note: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}

export type TBookRead = Pick<Book, "id" | "title" | "genre">;
export type TBookWrite = Omit<Book, "id" | "createdAt" | "updatedAt">;
export type TBookSearch = Pick<Book, "userId" | "title">;
