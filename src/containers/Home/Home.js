import React, { useState } from "react";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Product/Products";
import "./_home.scss";

function Home() {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <Navbar searchText={searchText} handleChange={handleChange} />
      <Category />
      <Products searchText={searchText} />
      <div
        style={{
          height: "1px",
          borderBottom: "2px solid #EDF1F2",
          margin: "20px 0",
        }}
      />
      <div className="container kampanya-container">
        <div
          className="kampanya-item"
          style={{ background: "#ffeae8 0% 0% no-repeat padding-box" }}
        >
          <img src="/assets/images/motor.png" alt="motor" />
          <div>
            75 TL Üzerine Teslimat Ücreti Bizden
            <button>Detaylı Bilgi</button>
          </div>
        </div>
        <div
          className="kampanya-item"
          style={{ background: "#E8F1FF 0% 0% no-repeat padding-box" }}
        >
          <img src="/assets/images/hediye_paketi.png" alt="hediye_paketi" />
          <div>
            Hediye Kategorisi için Sepette %15 İndirim
            <button>Hediye Ürünleri</button>
          </div>
        </div>
        <div
          className="kampanya-item"
          style={{ background: "#E2F7E1 0% 0% no-repeat padding-box" }}
        >
          <img src="/assets/images/kirtasiye.png" alt="kirtasiye" />
          <div>
            Kırtasiye Kategorisi için Sepette %15 İndirim
            <button>Detaylı Bilgi</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
