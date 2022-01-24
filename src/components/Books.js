import React from "react";
import { useBookSearch } from "../util/context";
import Loading from "./Loading";
import Book from "./Book";

const Books = () => {
  const { loading, books } = useBookSearch();

  if (loading) {
    return <Loading op={true}/>;
  }

  return (
    <section className="section">
      <div className="book-center">
        {books.map((book) => {
          const { index } = book;

          return (
            <Book
              key={index}
              id={book.id}
              image={book.volumeInfo.imageLinks}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Books;
