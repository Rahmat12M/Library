import { useContext } from "react";
import bookList from "../../data/booklist.json";
import style from "./ReadList.module.css";
import { ReadListContext } from "../context/readListContext/ReadListContext";

function ReadList() {
  const { readList, removeFromReadList } = useContext(ReadListContext);
  const listBooks = bookList.filter((book) => readList.includes(book.isbn));
  listBooks.map((book) => {
    return book.name.replaceAll('\n', '');
    
  });

  return (
    <>
      <div className={style.readList}>
        <h2>Books to Read</h2>

        {readList.length === 0 && (<p>No books in Reading List</p>)}
        {readList.length > 0 && (
          <>
            <p>These are the books on my reading list:</p>
            <ul>
              {listBooks.map((book) => (
                <li key={book.isbn}>
                  {book.name} ({book.author})  <button type="button" onClick={() => removeFromReadList(book)}>Remove</button>
                </li> 
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default ReadList;
