import { Book, TBookSearch, TBookWrite } from "../models/book";
import apiClient from "./ApiClient";

class BookService {
  async getBook(bookId: number) {
    const { data } = await apiClient.get<Book>(`/book/${bookId}`);
    return data;
  }
  async listUserBooks(payload: TBookSearch) {
    const { data } = await apiClient.post<Book[]>("/book", payload);
    return data;
  }
  async createBook(payload: TBookWrite) {
    const { data } = await apiClient.post<Book>("/book", payload);
    return data;
  }
  async updateBook(bookId: number, payload: TBookWrite) {
    const { data } = await apiClient.put<Book>(`/book/${bookId}`, payload);
    return data;
  }

  async DeleteBook(bookId: number) {
    const { data } = await apiClient.delete<Book>(`/book/${bookId}`);
    return data;
  }
}

export default new BookService();
