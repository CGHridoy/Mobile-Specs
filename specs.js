const specList = document.getElementById('specList');
const phoneTitle = document.getElementById('phoneTitle');
const API_KEY = '5dd11b6c96msh88d9de4d9f1bb68p14ee6djsna05dff3e60e9';

const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

fetch(`https://mobile-phones2.p.rapidapi.com/phones/${slug}`, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  phoneTitle.textContent = data.phone_name;
  for (const [key, value] of Object.entries(data.specifications)) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${key}</strong>: ${value}`;
    specList.appendChild(div);
  }
})
.catch(err => console.error(err));