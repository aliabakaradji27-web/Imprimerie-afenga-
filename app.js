async function buyAirtime() {
  let phone = document.getElementById("phone").value;
  let network = document.getElementById("network").value;
  let amount = document.getElementById("amount").value;

  let status = document.getElementById("status");

  status.innerText = "Processing...";

  try {
    let res = await fetch("http://localhost:3000/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone,
        network,
        amount
      })
    });

    let data = await res.json();

    status.innerText = data.message;

  } catch (err) {
    status.innerText = "Error occurred!";
  }
}