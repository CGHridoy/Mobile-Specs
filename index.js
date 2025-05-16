const brandList = document.getElementById('brandList');
const API_KEY = '5dd11b6c96msh88d9de4d9f1bb68p14ee6djsna05dff3e60e9';

fetch('https://mobile-phones2.p.rapidapi.com/brands', {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(brand => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="models.html?brand_id=${brand.brand_id}&name=${brand.brand}" class="text-blue-600 hover:underline">${brand.brand}</a>`;
    brandList.appendChild(li);
  });
})
.catch(err => console.error(err));