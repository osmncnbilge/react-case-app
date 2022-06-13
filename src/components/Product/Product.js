import React from "react";
import "./_product.scss";
const products = [
  {
    id: 1,
    description:
      "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
    isFreeDelivery: true,
    url: "watch.png",
    price: 399.9,
  },
  {
    id: 2,
    description: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
    isFreeDelivery: false,
    url: "parfum.png",
    price: 145.61,
  },
  {
    id: 3,
    description: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
    isFreeDelivery: true,
    url: "orkide.png",
    price: 249.9,
  },
  {
    id: 4,
    description: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
    isFreeDelivery: false,
    url: "bileklik.png",
    price: 329.9,
  },
  {
    id: 5,
    description:
      "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
    isFreeDelivery: false,
    url: "sirt_cantasi.png",
    price: 499.9,
  },
  {
    id: 6,
    description:
      "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
    isFreeDelivery: false,
    url: "satranc.png",
    price: 19.9,
  },
  {
    id: 7,
    description: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
    isFreeDelivery: false,
    url: "ayi.png",
    price: 89.9,
  },
  {
    id: 8,
    description: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
    isFreeDelivery: true,
    url: "nazar_ignesi.png",
    price: 29.9,
  },
  {
    id: 9,
    description: "Özel Tatlar Çikolata Kutusu 300 gr",
    isFreeDelivery: false,
    url: "cikolata_kutus.png",
    price: 59.9,
  },
  {
    id: 10,
    description: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
    isFreeDelivery: false,
    url: "gul_buketi.png",
    price: 199.9,
  },
];

function Product() {
  return (
    <>
      <div className="container product-container">
        <div className="selected-category">
          <img
            src="/assets/images/selected_category_icon.svg"
            alt="selected_category"
          />
          Tüm Kategoriler
        </div>
        <div className="products">
          {products.map((product, index) => (
            <div className="product">
              <img
                src={`/assets/images/products/${product.url}`}
                alt="product"
              />
              <div className="product-text">{product.description}</div>
              {product.isFreeDelivery ? (
                <div className="delivery-info">Ücretsiz Teslimat</div>
              ) : (
                <div className="delivery-info"></div>
              )}
              <div className="product-price">{product.price} TL</div>
              <button>Sepete Ekle</button>
              {/* <div className="sepet-counter">
              <div className="counter-decrement">
                <img src="/assets/images/minus-sign.png" alt="minus_icon" />
              </div>
              <div className="count">2</div>
              <div className="counter-increment">
                <img src="/assets/images/add-button.png" alt="plus_icon" />
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
