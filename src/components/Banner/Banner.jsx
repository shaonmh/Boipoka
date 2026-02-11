import React from "react";
import bookImg from "../../assets/books.jpg";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto p-2">
      <div className="hero bg-stone-200 min-h-70 p-2 lg:p-10 mt-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={bookImg}
            className="w-full lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-1 lg:ml-10">
            <h1 className="text-2xl lg:text-5xl my-10 font-semibold playfair text-gray-700">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-emerald-500 text-gray-50">
              <Link to="/readlist">View The List</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
