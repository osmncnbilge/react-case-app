import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Sepet from "../Sepet/Sepet";
import "./_navbar.scss";

function Navbar() {
  return (
    <>
      <div className="container">
        <img src="/assets/logo.svg" alt="logo" />
        <SearchInput />
        <Sepet />
      </div>
      <div
        className="header"
        style={{
          backgroundImage: "url(/assets/header_bg.png)",
        }}
      >
        <div>ÇiçekSepeti</div>
      </div>
      <div className="breadcrumb">
        <span>CiceksepetiBreadCrumb</span>
        <span>{">"}</span>
        <span>İstanbul</span>
        <span>{">"}</span>
        <span>CiceksepetiBreadCrumb</span>
      </div>
    </>
  );
}

export default Navbar;
