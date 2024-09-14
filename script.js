document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value;
    const apiKey = '0wNcEs5P1taGLFXyF0h48nrvxuqerAEL';  
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=25`; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gifContainer = document.getElementById("gifContainer");
            gifContainer.innerHTML = "";  // Clear previous GIFs

            data.data.forEach(gif => {
                const gifElement = document.createElement("img");
                gifElement.src = gif.images.fixed_height.url;
                gifElement.classList.add("gif-item");
                gifContainer.appendChild(gifElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the GIFs:', error);
        });
});
