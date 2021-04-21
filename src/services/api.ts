import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vercel-api-phi.vercel.app/api/'
  //'http://localhost:3333/'
});