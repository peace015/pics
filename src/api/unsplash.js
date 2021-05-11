import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 625ifvCAva-ic-M_rvZyX6WnDbpG3gBSbU5SI7omNPU',
  },
});
