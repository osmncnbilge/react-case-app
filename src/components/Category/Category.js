import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./_category.scss";
import { selectCategory } from "../../store/Category/CategoryActions";

function Category() {
  const dipatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categoryReducer);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const categories = [
    { name: "Tüm Kategoriler", type: 0 },
    { name: "Elektronik", type: 1 },
    { name: "Ev ve Yaşam", type: 2 },
    { name: "Evcil Hayvan", type: 3 },
    { name: "Kitap", type: 4 },
    { name: "Oyuncak", type: 5 },
    { name: "Spor", type: 6 },
    { name: "Çiçek (120)", type: 7 },
    { name: "Hediye", type: 8 },
    { name: "Moda, Aksesuar", type: 9 },
    { name: "Ofis, Kırtasiye", type: 10 },
    { name: "Parfüm", type: 11 },
    { name: "Kişisel Bakım", type: 12 },
    { name: "Petshop", type: 13 },
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
        {/* Küçük ekranda drop-down şeklinde açılacak şekilde ayarlandı */}
        {isOpenCategory && (
          <div className="category-section-sm">
            {categories.map((catetory) => (
              <button
                key={catetory.type}
                onClick={() => {
                  // Redux'taki selectedCategory seçiliyor ve dropDown kapatlıyor
                  dipatch(selectCategory(catetory));
                  setIsOpenCategory(false);
                }}
                className={
                  // Seçili category'e göre selected class'ı atanıyor
                  selectedCategory.type === catetory.type ? "selected" : ""
                }
              >
                {catetory.name}
              </button>
            ))}
          </div>
        )}
        <div className="category-section">
          {categories.map((catetory) => (
            <button
              key={catetory.type}
              onClick={() => dipatch(selectCategory(catetory))}
              className={
                selectedCategory.type === catetory.type ? "selected" : ""
              }
            >
              {catetory.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
