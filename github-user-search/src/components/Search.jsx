import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]); // Updated to handle multiple users
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setUsers([]);
        setLoading(true);

        try {
            const query = `q=${username ? `${username} in:login` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>=${minRepos}` : ''}`.trim();
            const results = await searchUsers(query);
            if (results.length === 0) {
                setError('No users match the search criteria.');
            } else {
                setUsers(results); // Set the list of matching users
            }
        } catch (err) {
            setError("An error occurred while searching for users.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        GitHub Username (optional)
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

            {users.length > 0 && (
                <div className="mt-6 space-y-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="p-4 bg-gray-100 rounded-md shadow-sm flex items-center space-x-4"
                        >
                            <img
                                src={user.avatar_url}
                                alt={`${user.login} avatar`}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">{user.login}</h3>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;