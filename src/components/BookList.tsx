import { useContext } from "react";
import bookList from "../../data/booklist.json";
import styles from "./BookList.module.css";
import { ReadListContext } from "../context/readListContext/ReadListContext";
import { Link } from "react-router-dom";

function BookList() {
  const { readList } = useContext(ReadListContext);
  console.log(`BookList - readList: `, readList);

  return (
    <>
      <section id="book-list">
        <h1>Booklist</h1>
        <div className={`${styles["book-list"]}`}>
          {bookList.map((book) => (
            <div key={book.isbn} className={styles.card}>
              <img src={book.cover} alt={book.name} />
              <div className={styles.description}>
                <h3>
                  {book.name} ({book.author})
                </h3>
                <p>
                  {readList.includes(book.isbn) && (<>In reading list! <br /></>)} 
                  <Link to={`/book/${book.isbn}`}>View more</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BookList;
