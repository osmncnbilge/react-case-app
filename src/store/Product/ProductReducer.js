import * as types from "./ProductTypes";

const INITIAL_STATE = [
  {
    id: 1,
    description:
      "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
    isFreeDelivery: true,
    url: "watch.png",
    price: 399.9,
    cartCount: 0,
    categoryType: 1,
  },
  {
    id: 2,
    description: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
    isFreeDelivery: false,
    url: "parfum.png",
    price: 145.61,
    cartCount: 0,
    categoryType: 9,
  },
  {
    id: 3,
    description: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
    isFreeDelivery: true,
    url: "orkide.png",
    price: 249.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 4,
    description: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
    isFreeDelivery: false,
    url: "bileklik.png",
    price: 329.9,
    cartCount: 0,
    categoryType: 9,
  },
  {
    id: 5,
    description:
      "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
    isFreeDelivery: false,
    url: "sirt_cantasi.png",
    price: 499.9,
    cartCount: 0,
    categoryType: 2,
  },
  {
    id: 6,
    description:
      "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
    isFreeDelivery: false,
    url: "satranc.png",
    price: 19.9,
    cartCount: 0,
    categoryType: 2,
  },
  {
    id: 7,
    description: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
    isFreeDelivery: false,
    url: "ayi.png",
    price: 89.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 8,
    description: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
    isFreeDelivery: true,
    url: "nazar_ignesi.png",
    price: 29.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 9,
    description: "Özel Tatlar Çikolata Kutusu 300 gr",
    isFreeDelivery: false,
    url: "cikolata_kutus.png",
    price: 59.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 10,
    description: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
    isFreeDelivery: false,
    url: "gul_buketi.png",
    price: 199.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 11,
    description:
      "Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth",
    isFreeDelivery: true,
    url: "watch.png",
    price: 399.9,
    cartCount: 0,
    categoryType: 1,
  },
  {
    id: 12,
    description: "Calvin Klein Euphoria EDP 100 ml Kadın Parfüm",
    isFreeDelivery: false,
    url: "parfum.png",
    price: 145.61,
    cartCount: 0,
    categoryType: 9,
  },
  {
    id: 13,
    description: "Gold Çizgili Vazoda 2 Dal Orkide Çiçeği",
    isFreeDelivery: true,
    url: "orkide.png",
    price: 249.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 14,
    description: "925 Ayar Gümüş Çeyreklik Bileklik (Y)",
    isFreeDelivery: false,
    url: "bileklik.png",
    price: 329.9,
    cartCount: 0,
    categoryType: 9,
  },
  {
    id: 15,
    description:
      "Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking",
    isFreeDelivery: false,
    url: "sirt_cantasi.png",
    price: 499.9,
    cartCount: 0,
    categoryType: 2,
  },
  {
    id: 16,
    description:
      "Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Cev...",
    isFreeDelivery: false,
    url: "satranc.png",
    price: 19.9,
    cartCount: 0,
    categoryType: 2,
  },
  {
    id: 17,
    description: "130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)",
    isFreeDelivery: false,
    url: "ayi.png",
    price: 89.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 18,
    description: "925 Ayar Gümüş Dualı İsimli Nazar İgnesi",
    isFreeDelivery: true,
    url: "nazar_ignesi.png",
    price: 29.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 19,
    description: "Özel Tatlar Çikolata Kutusu 300 gr",
    isFreeDelivery: false,
    url: "cikolata_kutus.png",
    price: 59.9,
    cartCount: 0,
    categoryType: 8,
  },
  {
    id: 20,
    description: "Kucak Dolusu Aşk 25 Kırmızı Gül Buketi",
    isFreeDelivery: false,
    url: "gul_buketi.png",
    price: 199.9,
    cartCount: 0,
    categoryType: 8,
  },
];

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      // Seçilen ürünün cartCount'u 1 arttırılıyor
      const newProductArr = state.map((product) => {
        if (product.id === action.payload)
          return { ...product, cartCount: product.cartCount + 1 };

        return product;
      });

      return [...newProductArr];

    case types.DECREMENT_PRODUCT_TO_CART:
      // Seçilen ürünün cartCount'u 1 azaltırılıyor
      const newProducts = state.map((product) => {
        if (product.id === action.payload)
          return {
            ...product,
            cartCount: product.cartCount - 1 < 0 ? 0 : product.cartCount - 1,
          };

        return product;
      });

      return [...newProducts];
    default:
      return state;
  }
};

export default productReducer;
