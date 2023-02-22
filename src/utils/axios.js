import axios from 'axios';

// axios instance for public api calls
export const axiosPublicInstance = axios.create({
  timeout: 10000,
});

// axios server instance for NextJS API (Proxy) to call Flow NFT Alert API
export const axiosServerInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
});

export const setServerAuthHeader = (req) =>
  req.headers?.authorization ? req.headers.authorization : `Basic ${process.env.API_AUTH_TOKEN}`;
