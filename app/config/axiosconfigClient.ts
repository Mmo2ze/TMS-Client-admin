import axios from 'axios';
const https = require('https')

const agent = new https.Agent({
  rejectUnauthorized: false,
})


const allCookies = typeof document !== 'undefined' ? document.cookie : '';



const inputString = allCookies

// Split the string into key-value pairs separated by a semicolon
const keyValuePairs : any = inputString.split(';');

// Initialize an empty object to store the result
const resultObject : any  = {};

// Loop through the key-value pairs and parse them into the result object
for (const pair of keyValuePairs) {

const [key, value] = pair.split('=');
if(value && key){
  resultObject[key.trim()] = value.trim();
}

}


let jwt = resultObject.JWT||""


const instance = axios.create({
  baseURL: "https://mrahmedawad.online/",
  httpsAgent: agent,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + jwt,
  },
});

export default instance;