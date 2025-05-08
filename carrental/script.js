function showOffers() {
    const box = document.getElementById("offersBox");
    box.style.display = "block";
    box.innerHTML = `
      <ul class="list-unstyled">
        <li> 20% off on first booking</li>
        <li>₹2000/day for Sedan Rentals</li>
      </ul>
    `;
  }
  