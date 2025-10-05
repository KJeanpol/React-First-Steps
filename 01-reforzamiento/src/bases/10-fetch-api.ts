import type { GiphyResponse } from "../data/giphy.response";

const API_KEY = "zKYUShJBPM6LmUdArh1iEghZoT0aLe13";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsieDOM = (url: string) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
}

myRequest
  .then((response) => response.json())
  .then(({data}:GiphyResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsieDOM(imageUrl);
    console.log(data.images.original.url);
  })
  .catch((err) => {
    console.warn("Error in fetch: ", err);
  }); //convierte el body a json
