import type { GiphyResponse } from "../data/giphy.response";

const API_KEY = "zKYUShJBPM6LmUdArh1iEghZoT0aLe13";

const createImageInsieDOM = (url: string) => {
  const img = document.createElement("img");
  img.src = url;
  document.body.append(img);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const data = (await response.json()) as GiphyResponse;
  return data.data.images.original.url;
};

//getRandomGifUrl().then( (url) => createImageInsieDOM(url) );
// otra forma de consumir la promesa
getRandomGifUrl().then(createImageInsieDOM);
