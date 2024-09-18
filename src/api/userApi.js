import axios from 'axios';

export const createUser = async (email, password) => {
  try {
    const response = await axios.post('/api/users', {
      username: email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createFave = async (jobTitle, link, status = null) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      '/api/favorites',
      {
        jobTitle,
        link,
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating favorite:', error);
    throw error.response ? error.response.data : error;
  }
};
