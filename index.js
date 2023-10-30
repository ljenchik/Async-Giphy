require("dotenv").config();
const api_key = process.env.API_KEY;
// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=emoji&limit=25`;

async function getImage(query) {
    const response = await fetch(query);
    const data = await response.json();
    const random = Math.floor(Math.random() * 25 + 1);
    console.log(data.data[random].images.original.url);
    return data.data[random].images.original.url;
}

getImage(endpoint);
