import User from '@/interfaces/User';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

export const registerUser = async (user: User): Promise<boolean> => {
  const response = await axios.post('/user', user);
  if(response.status === 201) {
    return true;
  }
    return false;
}

export const getUserByName = async (name: string): Promise<User> => {
    const response = await axios.post(`/user/find/`, { name });
    return response.data;
}

export const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get('/user');
    return response.data;
}

export const getUserInfo = async (link: string): Promise<string> => {
    const response = await axios.get("https://api.github.com/users/" + link);
    return response.data;
}