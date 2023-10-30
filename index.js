require("dotenv").config();
const api_key = process.env.API_KEY;
// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=emoji&limit=1&offset=0&rating=g&lang=en`;

async function getImage(query) {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data.data[0].url);
    return data.data[0].url;
}

getImage(endpoint);
