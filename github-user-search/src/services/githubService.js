import axios from "axios";

const GITHUB_SEARCH_API = "https://api.github.com/search/users?q=";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${GITHUB_SEARCH_API}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};
