import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setUserData(null);
        setLoading(true);

        try {
            const data = await fetchUserData(username);
            // Filter by location and minimum repositories if provided
            if (
                (location && data.location?.toLowerCase() !== location.toLowerCase()) ||
                (minRepos && data.public_repos < parseInt(minRepos))
            ) {
                setError('No user matches the advanced search criteria.');
            } else {
                setUserData(data);
            }
        } catch (err) {
            setError("Looks like we can't find the user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        GitHub Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location (optional)
                    </label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
                        Minimum Repositories (optional)
                    </label>
                    <input
                        id="minRepos"
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Enter minimum repositories"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}

            {error && <p className="mt-4 text-center text-red-500">{error}</p>}

            {userData && (
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h3 className="text-lg font-semibold">{userData.login}</h3>
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login} avatar`}
                        className="w-24 h-24 rounded-full mx-auto my-4"
                    />
                    <p className="text-sm">Location: {userData.location || 'N/A'}</p>
                    <p className="text-sm">Followers: {userData.followers}</p>
                    <p className="text-sm">Following: {userData.following}</p>
                    <p className="text-sm">Public Repos: {userData.public_repos}</p>
                </div>
            )}
        </div>
    );
};

export default Search;