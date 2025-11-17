import React, { use } from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('User not found');
        }
        // Logic to fetch user data from GitHub API
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username" 
            />

            <button type="submit">Search</button>
        </form>

        {error && <p style={{color: 'red'}}>{error}</p>}

        {userData && (<div>
            <h3>{userData.login}</h3>
            <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="100" />
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <a href={userData.html.url}>View Profile</a>
        </div>)}


    </div>
  )
}

export default Search