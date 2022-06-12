import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Sepet from "../Sepet/Sepet";
import "./_navbar.scss";

function Navbar() {
  return (
    <>
      <div className="container navbar">
        <img src="/assets/images/logo.svg" alt="logo" />
        <SearchInput />
        <Sepet />
      </div>
      <div
        className="header"
        style={{
          backgroundImage: "url(/assets/images/header_bg.png)",
        }}
      >
        <div className="container">ÇiçekSepeti</div>
      </div>
      <div className="container breadcrumb">
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
