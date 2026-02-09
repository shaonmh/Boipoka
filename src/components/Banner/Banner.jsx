import React from "react";
import bookImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="hero bg-stone-200 min-h-70 p-10 my-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-10">
            <h1 className="text-5xl my-10 font-semibold playfair text-gray-700">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-emerald-500 text-gray-50">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
