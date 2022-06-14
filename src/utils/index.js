const formatPrice = (price) => {
    const currency_symbol = "₺";
    const formattedOutput = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2
    });
  
    return formattedOutput.format(price).replace(currency_symbol, "");
  };
  
  export { formatPrice };
  