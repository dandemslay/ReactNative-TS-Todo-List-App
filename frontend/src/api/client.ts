import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:5001/api';

const client = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to add the token to all requests
client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const auth = {
  register: async (username: string, password: string) => {
    try {
      const response = await client.post('/auth/register', { username, password });
      console.log('API Response for register:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },
  
  login: async (username: string, password: string) => {
    try {
      const response = await client.post('/auth/login', { username, password });
      console.log('API Response for login:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Login error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },
  
  logout: async () => {
    try {
      const response = await client.post('/auth/logout');
      console.log('API Response for logout:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Logout error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Logout failed');
    }
  },
};

export const todos = {
  getAll: async () => {
    try {
      const response = await client.get('/todos');
      console.log('API Response for getAll:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Get todos error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch todos');
    }
  },
  
  create: async (title: string) => {
    try {
      const response = await client.post('/todos', { title });
      console.log('API Response for create:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Create todo error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create todo');
    }
  },
  
  update: async (id: string, data: { title?: string; completed?: boolean }) => {
    try {
      const response = await client.put(`/todos/${id}`, data);
      console.log('API Response for update:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Update todo error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Failed to update todo');
    }
  },
  
  delete: async (id: string) => {
    try {
      const response = await client.delete(`/todos/${id}`);
      console.log('API Response for delete:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Delete todo error:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Failed to delete todo');
    }
  },
};

export default client;
