import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookName, author, tags, category, image, rating } = singleBook;
  return (
    <Link to={`/bookdetails/${singleBook.bookId}`}>
      <div className="card bg-base-100 shadow-sm border p-3 ">
        <figure className="bg-gray-100 w-11/12 mx-auto py-5 rounded-lg mt-3">
          <img className="h-40.5" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            {" "}
            {tags.map((tag, i) => (
              <div
                className="bg-emerald-500 font-medium text-green-50 mr-2 rounded text-xs p-1"
                key={tag[i]}
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title playfair">
            <div>{bookName}</div>
          </h2>
          <p>by {author}</p>
          <div className="border-b border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge ">
              {rating}
              <FaStarHalfAlt />
            </div>

            <div className="badge badge-secondary">{category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
