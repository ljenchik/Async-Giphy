// require("dotenv").config();
// const api_key = process.env.API_KEY;
// // Print out value of API key stored in .env file
// console.log(process.env.API_KEY);

//Gets random data out of 25
async function getRandomImage(query) {
    try {
        const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=MgLakLPlYdchzPhxGysbroEOds8DCqvE&q=${query}&limit=25`;
        const response = await fetch(endpoint);
        const data = await response.json();
        const random = Math.floor(Math.random() * 25 + 1);
        return data.data[random].images.original.url;
    } catch (err) {
        console.log(err);
    }
}

// Gets 25 pieces of data
async function getImages(query) {
    try {
        const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=MgLakLPlYdchzPhxGysbroEOds8DCqvE&q=${query}&limit=25`;
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.data;
    } catch (err) {
        console.log(err);
    }
}

// Returns an array of 25 urls from the data
async function helperFunction(query) {
    const fetchedArray = await getImages(query);
    const urls = [];
    for (const item of fetchedArray) {
        urls.push(item.images.original.url);
    }
    return urls;
}

if (typeof window !== "undefined") {
    const query = document.getElementById("query");
    const images = document.getElementById("images");
    const buttonForManyImages = document.getElementById("many");
    const incorrectQuery = document.getElementById("incorrectQuery");

    buttonForManyImages.addEventListener("click", async () => {
        images.innerHTML = "";
        const urls = await helperFunction(query.value);
        if (urls.length > 0) {
            incorrectQuery.innerHTML = "";
            for (const url of urls) {
                const img = document.createElement("img");
                img.src = url;
                images.appendChild(img);
            }
        } else {
            incorrectQuery.innerHTML =
                "No images available related to your query. Try again";
        }
        query.value = "";
    });
}
