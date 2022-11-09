import axios from 'axios';

export const getText = async () => {
  const response = await axios.get('https://api.adviceslip.com/advice');

  return response.data;
};
