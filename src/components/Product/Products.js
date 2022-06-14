import React from "react";
import "./_product.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  decrementProductToCart,
} from "../../store/Product/ProductActions";
import { formatPrice } from "../../utils";

function Products({ searchText }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categoryReducer);
  // Ürünleri seçilen category'e göre filtreleme yapılıyor
  let products = useSelector((state) => state.productReducer).filter(
    (product) => {
      if (selectedCategory.type === 0) {
        return product;
      } else if (product.categoryType === selectedCategory.type) {
        return product;
      }
    }
  );

  // Kategoriye göre filtrelenmiş ürünler arasından aranan text'e göre filtreleme
  if (searchText.length > 2) {
    products = products.filter((product) =>
      product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <>
      <div className="container product-container">
        <div className="selected-category">
          <img
            src="/assets/images/selected_category_icon.svg"
            alt="selected_category"
          />
          {selectedCategory.name}
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
              <div className="product-price">
                {formatPrice(product.price)} TL
              </div>
              {/* Ürün sepete eklenmişe increment ve decrement buttonlarını olduğu element getiriliyor */}
              {product.cartCount > 0 ? (
                <>
                  <div className="sepet-counter">
                    <div
                      className="counter-decrement"
                      onClick={() =>
                        dispatch(decrementProductToCart(product.id))
                      }
                    >
                      <img
                        src="/assets/images/minus-sign.png"
                        alt="minus_icon"
                      />
                    </div>
                    <div className="count"> {product.cartCount} </div>
                    <div
                      className="counter-increment"
                      onClick={() => dispatch(addProductToCart(product.id))}
                    >
                      <img
                        src="/assets/images/add-button.png"
                        alt="plus_icon"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <button onClick={() => dispatch(addProductToCart(product.id))}>
                  Sepete Ekle
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
