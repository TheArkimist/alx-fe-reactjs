import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: token
        ? {
              Authorization: `Bearer ${token}`,
          }
        : {},
});

/**
 * Fetch user data by username.
 * @param {string} username - GitHub username.
 * @returns {Promise<Object>} - User data.
 */
export const fetchUserData = async (username) => {
    try {
        const response = await api.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

/**
 * Search for users based on advanced criteria.
 * @param {Object} params - Search parameters.
 * @param {string} params.username - GitHub username (optional).
 * @param {string} params.location - User location (optional).
 * @param {number} params.minRepos - Minimum number of public repositories (optional).
 * @returns {Promise<Array>} - List of matching users.
 */
export const searchUsers = async ({ username, location, minRepos }) => {
    try {
        // Construct the query string for the GitHub Search API
        let query = '';
        if (username) query += `${username} in:login `;
        if (location) query += `location:${location} `;
        if (minRepos) query += `repos:>=${minRepos}`;

        const response = await api.get(`/search/users`, {
            params: { q: query.trim() },
        });

        return response.data.items; // Return the list of matching users
    } catch (error) {
        console.error("Error searching for users:", error);
        throw error;
    }
};
