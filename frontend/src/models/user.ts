import { Book } from "./book";

export interface User {
  id: number;
  username: string;
  books: Book[];
  createdAt: Date;
  updatedAt: Date;
}
