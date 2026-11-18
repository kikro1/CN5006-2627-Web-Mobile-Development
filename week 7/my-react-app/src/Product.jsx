const Product = ({ productName, price }) => {

  const calculateVAT = () => {

    const vatRate = document.getElementById("vatRate").value;

    const priceWithVAT =
      Number(price) + (Number(price) * Number(vatRate) / 100);

    document.getElementById("vatMessage").innerHTML =
      `<b style="color:green">Price including VAT: £${priceWithVAT}</b>`;
  };

  return (
    <div>
      <h2>{productName}</h2>

      <p>Price: £{price}</p>

      <label>Enter VAT Rate (%): </label>

      <input
        type="number"
        id="vatRate"
      />

      <br /><br />

      <button onClick={calculateVAT}>
        Calculate VAT
      </button>

      <p id="vatMessage"></p>

    </div>
  );
};

export default Product;
