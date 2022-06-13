import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./_sepet.scss";

function Sepet() {
  const products = useSelector((state) => state.productReducer);
  const cart = products.filter((product) => product.cartCount > 0);

  return (
    <>
      <div className="sepet-container">
        <img src="/assets/images/sepet_icon.svg" alt="sepet" />
        Sepetim
        {cart.length > 0 && <div className="sepet-badge"> {cart.length} </div>}
        <div className="sepet-info">
          <div className="info-text">
            <img src="/assets/images/simsek_icon.svg" alt="simsek_icon" />
            <span>50 TL</span> ürün daha ekleyin kargo bedava
          </div>

          <div className="info-bar-container">
            <div className="info-bar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sepet;
