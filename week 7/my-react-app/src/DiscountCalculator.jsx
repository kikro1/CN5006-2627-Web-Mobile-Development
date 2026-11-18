// DiscountCalculator.jsx
// CN5006 Week 7 portfolio task – Bohdan Voitenkov (3121742)
// A functional component that receives a product name and price as props
// and calculates the final price after a discount entered by the user.

const DiscountCalculator = ({ productName, price }) => {

  // Called by React when the "Calculate Discount" button is clicked
  const calculateDiscount = () => {

    // read the discount percentage typed into the text box
    const discountRate = document.getElementById("discountRate").value;
    const message = document.getElementById("discountMessage");

    // simple validation: the discount must be a number between 0 and 100
    if (discountRate === "" || Number(discountRate) < 0 || Number(discountRate) > 100) {
      message.innerHTML =
        `<b style="color:red">Please enter a discount between 0 and 100%</b>`;
      return;
    }

    const discountAmount = Number(price) * Number(discountRate) / 100;
    const discountedPrice = Number(price) - discountAmount;

    // show the result below the button in bold blue text
    message.innerHTML =
      `<b style="color:blue">Discounted price: £${discountedPrice.toFixed(2)}</b>` +
      `<br/><span style="color:blue">You save £${discountAmount.toFixed(2)} (${discountRate}% off)</span>`;
  };

  return (
    <div>
      <h2>{productName}</h2>

      <p>Original price: £{price}</p>

      <label htmlFor="discountRate">Enter Discount (%): </label>

      <input
        type="number"
        id="discountRate"
        min="0"
        max="100"
      />

      <br /><br />

      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>

      <p id="discountMessage"></p>

    </div>
  );
};

export default DiscountCalculator;
