import React from "react";
import "./_product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/Product/ProductActions";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);

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
          {products.map((product) => (
            <div key={product.id} className="product">
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
              <button onClick={() => dispatch(addProductToCart(product.id))}>
                Sepete Ekle
              </button>
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
