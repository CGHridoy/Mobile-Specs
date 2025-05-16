const modelList = document.getElementById('modelList');
const brandTitle = document.getElementById('brandTitle');
const API_KEY = '5dd11b6c96msh88d9de4d9f1bb68p14ee6djsna05dff3e60e9';

const urlParams = new URLSearchParams(window.location.search);
const brandId = urlParams.get('brand_id');
const brandName = urlParams.get('name');
brandTitle.textContent = `Models by ${brandName}`;

fetch(`https://mobile-phones2.p.rapidapi.com/${brandId}/phones`, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(model => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="specs.html?slug=${model.slug}" class="text-blue-500 hover:underline">${model.phone_name}</a>`;
    modelList.appendChild(li);
  });
})
.catch(err => console.error(err));