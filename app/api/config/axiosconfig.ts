import axios from 'axios';
import { cookies } from 'next/headers';
const https = require('https')

// Next we make an 'instance' of it
const agent = new https.Agent({
  rejectUnauthorized: false,
})
const instance = axios.create({
  baseURL: "https://localhost:7208",
  httpsAgent: agent,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default instance;