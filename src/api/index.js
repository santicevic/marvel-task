import axios from 'axios';
import md5 from 'md5';

const base = 'https://gateway.marvel.com/v1/public';

const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const ts = new Date().getTime();

export async function getCharactersByName(nameSubstring){
 const { data: response } = await axios.get(`${base}/characters`, {
      params: { 
          apikey: apiKey,
          hash: md5(ts+privateKey+apiKey),
          ts,
          nameStartsWith: nameSubstring && nameSubstring
      }
  })
  return response.data;
}
