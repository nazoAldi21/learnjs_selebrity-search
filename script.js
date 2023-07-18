const form = document.getElementById('searchForm');
const nameInput = document.getElementById('nameInput');
const resultContainer = document.getElementById('resultContainer');
const apiKey = 'YOUR_API_KEY';

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = nameInput.value;
  searchCelebrity(name);
});

function searchCelebrity(name) {
  const url = `https://api.api-ninjas.com/v1/celebrity?name=${name}`;
  
  fetch(url, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        resultContainer.innerHTML = '<p>No celebrity found.</p>';
      } else {
        displayCelebrity(data[0]);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultContainer.innerHTML = '<p>An error occurred. Please try again.</p>';
    });
}

function displayCelebrity(celebrity) {
  resultContainer.innerHTML = `
    <div>
      <h2>${celebrity.name}</h2>
      <p><strong>Gender:</strong> ${celebrity.gender}</p>
      <p><strong>Occupation:</strong> ${celebrity.occupation}</p>
    </div>
    <div>
      <p><strong>Height:</strong> ${celebrity.height}</p>
      <p><strong>Birthday:</strong> ${celebrity.birthday}</p>
    </div>
  `;
}
