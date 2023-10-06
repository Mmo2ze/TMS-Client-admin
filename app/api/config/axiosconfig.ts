import axios from 'axios';
import { cookies } from 'next/headers';
const https = require('https')

// Next we make an 'instance' of it
const agent = new https.Agent({
  rejectUnauthorized: false,
})
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'http://localhost:5078',
    httpsAgent: agent,
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff


export default instance;