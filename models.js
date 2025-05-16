document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const brand = urlParams.get("brand");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const modelList = document.getElementById("model-list");
      const template = document.getElementById("model-template");
      const brandTitle = document.getElementById("brand-title");
      brandTitle.textContent = `${brand} Models`;

      const models = data.filter(mobile => mobile.brand === brand);
      models.forEach(mobile => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".model-name").textContent = mobile.model;
        clone.querySelector("div").addEventListener("click", () => {
          window.location.href = `specs.html?brand=${brand}&model=${encodeURIComponent(mobile.model)}`;
        });
        modelList.appendChild(clone);
      });
    });
});
