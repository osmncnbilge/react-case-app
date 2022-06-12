import React from "react";
import "./_sepet.scss";

function Sepet() {
  return (
    <>
      <div className="sepet-container">
        <img src="/assets/sepet_icon.svg" alt="sepet" />
        Sepetim
        <div className="sepet-badge">2</div>
        <div className="sepet-info">
          <div className="info-text">
            <img src="/assets/simsek_icon.svg" alt="simsek_icon" />
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
