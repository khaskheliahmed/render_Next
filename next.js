
let data = [];
let currentIndex = 0;
const div = document.querySelector("#data");
const button = document.querySelector("#nextBtn");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    displayData(currentIndex);
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));

function displayData(index) {
 
  if (data.length > 0) {

    div.innerHTML = `
      <h2>Name: ${data[index].name}</h2>
      <p>Username: ${data[index].username}</p>
      <p>Email: ${data[index].email}</p>
      <p>Phone: ${data[index].phone}</p>
    `;
  } else {
  
    div.innerHTML = `<h2>Loading...</h2>`;
  }
}

nextBtn.addEventListener('click', function () {
  if (data.length > 0) {
    currentIndex = (currentIndex + 1) % data.length;
    displayData(currentIndex);
  }
});

