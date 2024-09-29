import axios from 'axios';

export const fetchAdvancedUserData = async (query) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  };
  