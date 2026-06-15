import { useParams } from "react-router-dom";
import { useBookDetails } from "../hooks/useBookDetails";
import styles from "./BookDetails.module.css";
import { ReadListContext } from "../context/readListContext/ReadListContext";
import { useContext } from "react";

function BookDetails() {
  const { readList, setReadList, removeFromReadList } = useContext(ReadListContext);
  const { isbn } = useParams();
  const book = useBookDetails(isbn!);

  const addToReadList = () => {
    if (!isbn) return;

    const newReadList: string[] = [...readList, isbn];
    setReadList(newReadList);
  };

  return (
    <>
      <div className={styles.bookDetails}>
        <img src={book?.cover} alt={book?.name} />
        <h2>{book?.name}</h2>
        <p>Review: {book?.review}</p>
        <p>ISBN: {book?.isbn}</p>
        <p>Author: {book?.author}</p>
        <p>Published: {book?.published}</p>
        <p>Language: {book?.language}</p>
        <p>Main subjects: {book?.themes.join(", ")}</p>
        {book?.isbn && readList.includes(book!.isbn) && (
          <p>
            <button type="button" onClick={() => removeFromReadList(book)}>
              Remove from reading list
            </button>
          </p>
        )}
        {book?.isbn && !readList.includes(book.isbn) && (
          <p>
            <button type="button" onClick={addToReadList}>
              Add to reading list
            </button>
          </p>
        )}
      </div>
    </>
  );
}

export default BookDetails;
