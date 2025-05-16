document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const brand = urlParams.get("brand");
  const model = urlParams.get("model");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const specsDiv = document.getElementById("specs");
      const title = document.getElementById("model-title");

      const phone = data.find(item => item.brand === brand && item.model === model);

      if (phone) {
        title.textContent = `${phone.brand} ${phone.model}`;
        for (const [key, value] of Object.entries(phone.specs)) {
          const p = document.createElement("p");
          p.innerHTML = `<strong>${key}:</strong> ${value}`;
          specsDiv.appendChild(p);
        }
      } else {
        specsDiv.innerHTML = "<p>Specs not found.</p>";
      }
    });
});
