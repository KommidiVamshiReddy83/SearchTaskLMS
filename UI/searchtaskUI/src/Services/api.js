import axios from 'axios';

export const API_BASE = 'http://localhost:8080';

export async function fetchSuggestions(query) 
{
  if (!query) return [];
  try {
    const res = await axios.get(`${API_BASE}/search`, {
      params: { courseName: query }
    });
    return Array.isArray(res.data) ? res.data : [];
  } catch (err) {
    console.error('API error:', err);
    return [];
  }
}