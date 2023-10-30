// require("dotenv").config();
// const api_key = process.env.API_KEY;
// // Print out value of API key stored in .env file
// console.log(process.env.API_KEY);

//Gets random data out of 25
async function getRandomImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=MgLakLPlYdchzPhxGysbroEOds8DCqvE&q=${query}&limit=25`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const random = Math.floor(Math.random() * 25 + 1);
    return data.data[random].images.original.url;
}

// Gets 25 pieces of data
async function getImages(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=MgLakLPlYdchzPhxGysbroEOds8DCqvE&q=${query}&limit=25`;
    const response = await fetch(endpoint);
    const data = await response.json();
    //console.log(data);
    return data.data;
}

// Returns an array of 25 urls from the data
async function helperFunction() {
    const fetchedArray = await getImages("dogs");
    const urls = [];
    for (const item of fetchedArray) {
        urls.push(item.images.original.url);
    }
    console.log(urls);
    return urls;
}

if (typeof window !== "undefined") {
    const button = document.querySelector("button");
    button.addEventListener("click", async () => {
        const url = await getRandomImage("dogs");
        console.log(url);
        document.getElementById("random").innerHTML = `<img src=${url} />`;
    });
}
