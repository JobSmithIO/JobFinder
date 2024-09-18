// Co-authored by Brian N. & Erin L.
import dotenv from 'dotenv';

const API_URL = '/api'; // Adjust this to match your server's API endpoint

export class favoritesMethods {
  static async createFave(userId, jobTitle, link, status = null) {
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, jobTitle, link, status }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create favorite');
      }
      return await response.json();
    } catch (err) {
      console.error('Error in createFave:', err);
      throw err;
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
