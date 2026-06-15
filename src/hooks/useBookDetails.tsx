import bookList from "../../data/booklist.json";

export function useBookDetails(isbn: string) {
  return bookList.find((book) => book.isbn === isbn);
}
