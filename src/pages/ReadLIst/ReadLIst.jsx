import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../../Utility/addToDb";
import { BsPeople } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";

const ReadLIst = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBooks = getStoredBooks();
    // console.log(storedBooks);
    const myReadList = data.filter((book) => storedBooks.includes(book.bookId));
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortBooks = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortBooks);
    }
    if (type === "ratings") {
      const sortBooks = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortBooks);
    }
  };

  return (
    <div className="w-3/4 mx-auto my-20">
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <div className="dropdown dropdown-start flex justify-center ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-success text-gray-700 mx-auto"
            >
              Sort by: {sort ? sort : ""}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-gray-100 mt-12   text-gray-700 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("pages")}>Pages</a>
              </li>
              <li>
                <a onClick={() => handleSort("ratings")}>Ratings</a>
              </li>
            </ul>
          </div>
          <h2>Book I read</h2>

          {readList.map((book) => (
            <div
              className="card h-70 card-side card-border my-4 bg-slate-100 text-gray-500 p-6"
              key={book.bookId}
            >
              <figure className="h-full mr-3 p-5 bg-slate-200 rounded-lg">
                <img className="h-full" src={book.image} alt={book.bookName} />
              </figure>
              <div className="flex flex-col justify-center gap-3">
                <p className="text-2xl playfair font-bold text-gray-700">
                  {book.bookName}
                </p>
                <p className="font-medium text-gray-600">By : {book.author}</p>
                <p className="flex">
                  {" "}
                  <span className="flex justify-around mr-3 ">
                    <BsPeople className="text-xl mr-2" />
                    Publisher : {book.publisher}
                  </span>{" "}
                  <span className="flex justify-around">
                    <LuFileSpreadsheet className="text-xl mr-2" />
                    Page : {book.totalPages}{" "}
                  </span>
                </p>
                <p className="flex gap-3 text-gray-700">
                  <b>Tag</b> :{" "}
                  {book.tags.map((tag) => (
                    <span
                      className=" font-normal text-emerald-600 bg-emerald-100 mr-2 text-xs rounded p-1"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                  <span>Year of publishing : {book.yearOfPublishing}</span>
                </p>
                <p>
                  {" "}
                  <span className=" text-amber-700 bg-amber-100 mr-2 text-xs rounded-lg p-2">
                    Rating: {book.rating}
                  </span>
                  <span className=" text-blue-700 bg-blue-100 mr-2 text-xs rounded-xl p-2">
                    Catergory : {book.category}
                  </span>
                  <span className="bg-green-500 p-2 rounded-xl text-xs text-white">
                    <a href="#">View details</a>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Book I want to read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadLIst;
