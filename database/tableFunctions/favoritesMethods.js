import axios from 'axios';

const API_URL = '/api'; // This should match the prefix used in your server routes

export class favoritesMethods {
  static async createFave(jobTitle, link, status = null) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_URL}/favorites`,
        { jobTitle, link, status },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error in createFave:', error);
      throw error.response ? error.response.data : error;
    }
  }

  static async getFaves(userId) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/favorites?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch favorites');
      return await response.json();
    } catch (err) {
      console.error('Error in getFaves:', err);
      throw err;
    }
  }

  static async updateFave(faveID, newStatus) {
    try {
      const response = await fetch(`${API_URL}/favorites/${faveID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update favorite');
      return await response.json();
    } catch (err) {
      console.error('Error in updateFave:', err);
      throw err;
    }
  }

  static async deleteFave(faveID) {
    try {
      const response = await fetch(`${API_URL}/favorites/${faveID}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete favorite');
      return await response.json();
    } catch (err) {
      console.error('Error in deleteFave:', err);
      throw err;
    }
  }
}

export const createFave = favoritesMethods.createFave;
export const getFaves = favoritesMethods.getFaves;
export const updateFave = favoritesMethods.updateFave;
export const deleteFave = favoritesMethods.deleteFave;
