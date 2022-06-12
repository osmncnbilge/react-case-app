import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Sepet from "../Sepet/Sepet";
import "./_navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <img src="/assets/logo.svg" alt="logo" />
      <SearchInput />
      <Sepet />
    </div>
  );
}

export default Navbar;
