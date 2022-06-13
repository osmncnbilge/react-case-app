import React from "react";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <>
      <Navbar />
      <Category />
      <Product />
    </>
  );
}

export default Home;
