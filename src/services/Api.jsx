import axios from 'axios';

const BASE_URL = 'https://asos2.p.rapidapi.com';
const API_KEY = '161fde6fe5msh9f236f4333b2ee6p1e74dfjsndf4ad654b5fe';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products/v2/list', {
      params: {
        store: 'US',
        offset: '0',
        categoryId: '4209',
        limit: '48',
        country: 'US',
        sort: 'freshness',
        currency: 'USD',
        sizeSchema: 'US',
        lang: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
