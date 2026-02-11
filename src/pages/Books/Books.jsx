import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);

  // const bookPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-2 lg:w-6/8 mx-auto gap-2 lg:gap-8 my-5 lg:my-10">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </Suspense>
    </div>
  );
};

export default Books;
