import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils";
import "./_sepet.scss";

function Sepet() {
  const products = useSelector((state) => state.productReducer);
  // Ürünlerde cartCount'u 0'dan büyük olanları seçilerek cart dizisi oluşturuluyor
  const cart = products.filter((product) => product.cartCount > 0);

  // Reduce fonksiyonu yardımıyla Cart toplam tutarı hesaplanıyor
  const cartTotalPrice = cart.reduce((previousValue, currentProduct) => {
    const currentProductPrice = currentProduct.price * currentProduct.cartCount;
    return previousValue + currentProductPrice;
  }, 0);

  return (
    <>
      <div className="sepet-container">
        <img src="/assets/images/sepet_icon.svg" alt="sepet" />
        Sepetim
        {cart.length > 0 && <div className="sepet-badge"> {cart.length} </div>}
        <div className="sepet-info">
          {500 - cartTotalPrice > 0 ? (
            <>
              <div className="info-text">
                <img src="/assets/images/simsek_icon.svg" alt="simsek_icon" />
                <span>{formatPrice(500 - cartTotalPrice)} TL</span> ürün daha
                ekleyin kargo bedava
              </div>
            </>
          ) : (
            <>Kargo Bedava</>
          )}

          <div className="info-bar-container">
            <div
              className="info-bar"
              style={{
                width:
                  cartTotalPrice * 0.2 > 100
                    ? "100%"
                    : `${cartTotalPrice * 0.2}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sepet;
