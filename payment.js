document.getElementById("payment-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;
  const status = document.getElementById("status");

  status.textContent = "Processing...";

  try {
    // Create a customer
    const customerResponse = await fetch("https://equibond-payment-backend.vercel.app/api/customers/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    if (!customerResponse.ok) throw new Error("Failed to create customer");

    const customerData = await customerResponse.json();
    const customerId = customerData.customerId;

    // Create a charge
    const chargeResponse = await fetch("https://equibond-payment-backend.vercel.app//api/charges/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customerId,
        amount: parseInt(amount, 10) * 100, // Convert to cents
        currency: "usd"
      })
    });

    if (!chargeResponse.ok) throw new Error("Failed to create charge");

    const chargeData = await chargeResponse.json();

    status.textContent = "Payment Successful!";
    console.log("Charge successful:", chargeData);
  } catch (error) {
    console.error("Error:", error);
    status.textContent = "Payment Failed. Please try again.";
  }
});
