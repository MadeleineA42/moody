// Function to fetch and display random "funny animals" gifs
function fetchAndDisplayRandomFunnyAnimals() {
  var cacheBuster = new Date().getTime();
  var apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=XKxbeiNY4qzJ4OYhGlkWPOP4vyPmOxil&tag=funny+animals&rating=g&lang=en&bundle=messaging_non_clips&cacheBuster=${cacheBuster}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var randomGIF = [data.data];
      displayAvailableGIFs(randomGIF);
    })
    .catch(error => {
      console.error('Error fetching random funny animals GIF:', error);
    });
}

// Function to display gifs on the page
function displayAvailableGIFs(gifs) {
  var gifContainer = document.getElementById('gif-container');
  gifContainer.innerHTML = ''; // Clear existing gifs
  gifs.forEach(gif => {
    var gifId = gif.id;
    var gifUrl = gif.images.fixed_height.url;
    var img = document.createElement('img');
    img.src = gifUrl;
    img.width = '280';
    img.height = '157.5';
    gifContainer.appendChild(img);
  });
}

// Event listener to the generate button
document.getElementById('generate-button').addEventListener('click', () => {
  // Fetch and display a random "funny animals" gifs
  fetchAndDisplayRandomFunnyAnimals();
});

// Initial call to fetch and display a random "funny animals" gifs when the page loads
fetchAndDisplayRandomFunnyAnimals();
