const API_BASE_URL = 'http://localhost:3000/api';

export async function getStandings() {
  const response = await fetch(`${API_BASE_URL}/standings`);

  if (!response.ok) {
    throw new Error('Failed to fetch standings');
  }
  return response.json();
}
