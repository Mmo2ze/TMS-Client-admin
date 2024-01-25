import axios from 'axios';

const resultObject : any  = {};


const allCookies = typeof document !== 'undefined' ? document.cookie : '';



const inputString = allCookies
const keyValuePairs : any = inputString.split(';');

// Loop through the key-value pairs and parse them into the result object
for (const pair of keyValuePairs) {

const [key, value] = pair.split('=');
if(value && key){
  resultObject[key.trim()] = value.trim();
}

}



// Split the string into key-value pairs separated by a semicolon

// Initialize an empty object to store the result


let jwt = resultObject.token|| "";


const instance = axios.create({
  baseURL: "https://api.tass.ist/",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization: jwt!=""?"Bearer " + jwt:"",
  },
});

export default instance;