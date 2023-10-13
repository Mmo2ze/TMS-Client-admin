import axios from 'axios';
import { cookies } from 'next/headers';
const https = require('https')
// const token = cookies().get('JWT')?.value;
// Next we make an 'instance' of it
const agent = new https.Agent({
  rejectUnauthorized: false,
})
// console.log("ToKEN"+token)
const instance = axios.create({
  baseURL: "http://localhost:5078",
  httpsAgent: agent,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    // "Authorization": "Bearer " + token
  },
});

export default instance;