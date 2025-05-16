document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const brandList = document.getElementById("brand-list");
      const template = document.getElementById("brand-template");

      const brands = [...new Set(data.map(mobile => mobile.brand))];

      brands.forEach(brand => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".brand-name").textContent = brand;
        clone.querySelector("div").addEventListener("click", () => {
          alert(`Brand: ${brand}\n(Next: model list page from this brand)`);
        });
        brandList.appendChild(clone);
      });
    });
});
