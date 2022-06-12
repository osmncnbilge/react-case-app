import React, { useState } from "react";
import "./_category.scss";

function Category() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const categories = [
    { name: "Tüm Kategoriler" },
    { name: "Elektronik" },
    { name: "Elektronik" },
    { name: "Evcil Hayvan" },
    { name: "Kitap" },
    { name: "Oyuncak" },
    { name: "Spor" },
    { name: "Çiçek (120)" },
    { name: "Hediye" },
    { name: "Moda, Aksesuar" },
    { name: "Ofis, Kırtasiye" },
    { name: "Parfüm" },
    { name: "Kişisel Bakım" },
    { name: "Petshop" },
  ];

  const categoryClickHandler = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  return (
    <>
      <div className="container category">
        <div className="category-logo" onClick={categoryClickHandler}>
          <img src="/assets/images/category_icon.svg" alt="category_icon" />
          Kategoriler
        </div>
        {isOpenCategory && (
          <div className="category-section-sm">
            {categories.map((catetory, index) => (
              <button key={index}> {catetory.name} </button>
            ))}
          </div>
        )}
        <div className="category-section">
          {categories.map((catetory, index) => (
            <button key={index}> {catetory.name} </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
