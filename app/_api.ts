import axios from 'axios';

const main = axios.create({
  baseURL: 'https://my-main-api.com',
});
const cms = axios.create({
  baseURL: 'https://my-cms-api.com',
});

export { main, cms };
