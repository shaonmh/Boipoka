import React from "react";
import Books from "../Books/Books";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner> </Banner>
      <h1 className="text-center my-10 playfair text-2xl">Books</h1>
      <Books data={data}> </Books>
    </div>
  );
};

export default Home;
