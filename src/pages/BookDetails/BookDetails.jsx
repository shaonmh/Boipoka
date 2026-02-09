import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDb";
import Swal from "sweetalert2";
const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const param = useParams();
  const { id } = param;
  const bookId = parseInt(id);
  const bookDetails = data.find((book) => book.bookId === bookId);
  console.log(typeof id, data);
  const {
    bookName,
    image,
    author,
    tags,
    review,
    category,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = bookDetails;

  const handleMarkAsRead = (id) => {
    console.log(`Book with ID ${id} marked as read.`);
    addToStoredDB(id);
    Swal.fire({
      title: "Marked as Read!",
      text: `The book named ${bookName} has been marked as read.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="w-full lg:w-7/10 mx-auto justify-center my-10">
      <div className="card  grid grid-cols-1 lg:grid-cols-2  bg-base-100 ">
        <div className="bg-gray-200 shadow-sm">
          <figure className=" h-60 lg:h-130 mt-15 mb-10">
            <img className="h-full" src={image} alt={bookName} />
          </figure>
        </div>
        <div className="p-2 lg:card-body">
          <h2
            className="card-title playfair text-2xl
           lg:text-5xl"
          >
            {bookName}
          </h2>
          <p className="my-4">by : {author}</p>
          <div className="border-b"></div>
          <p>
            <b> {category}</b>
          </p>
          <div className="border-b"></div>
          <p>
            <b>Review : </b>
            {review}
          </p>

          <div className="flex justify-start gap-5">
            <b>Tags : </b>
            {tags.map((tag, i) => (
              <button
                key={i}
                className=" text-emerald-600 bg-emerald-100 mr-2 rounded p-1"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="border-b my-3"></div>

          <p>
            No of Pages : <b>{totalPages}</b>
          </p>
          <p>
            Publisher : <b>{publisher}</b>
          </p>

          <p>
            Year of Publishing : <b>{yearOfPublishing}</b>
          </p>
          <p>
            Rating : <b>{rating}</b>
          </p>

          <div className="card-actions justify-left mt-5">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline"
            >
              Mark as Read
            </button>
            <button className="btn btn-accent">Wish List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
