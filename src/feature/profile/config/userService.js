import axios from 'axios';
import { apiURI } from '../../../config/environtment';

// Register user
const registerUser = async (payload) => {
  //   console.log('service -> registerUser', payload);
  const response = await axios.post(`${apiURI}/auth/signup`, payload);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const userService = {
  registerUser,
  // login,
  // googleOAuth,
};

export default userService;
