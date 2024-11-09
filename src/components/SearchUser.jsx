import React, { useState } from 'react';
import api from '../api';
import '../styles/SearchComponent.css'
const SearchComponent = () => {
    const [usernameQuery, setUsernameQuery] = useState('');
    const [nameQuery, setNameQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!usernameQuery && !nameQuery) return; // Avoid empty search queries

        setLoading(true);
        setError(null); // Reset previous errors

        try {
            // Construct the search parameters
            const response = await api.get(`/hadith/users/`, {
                params: {
                    username: usernameQuery,
                    name: nameQuery,
                },
            });
            setResults(response.data); // Set the search results from the API response
        } catch (err) {
            setError('Error fetching data. Please try again.'); // Handle errors gracefully
        } finally {
            setLoading(false);
        }
    };

    // Handle key press to initiate search on 'Enter' key
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    async function sendFriendRequest(user_id){
        
          const res= await api.post(`hadith/request/${user_id}/friend/`).then((res)=>alert(res.status))
        
        
    }

    return (
        <div className="search-container">
            <h2>User Search</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search by username"
                    value={usernameQuery}
                    onChange={(e) => setUsernameQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={nameQuery}
                    onChange={(e) => setNameQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {results.length > 0 && (
                <ul className="results-list">
                    {results.map((user) => (
                        <li key={user.id} className="result-item">
                        <div className="user-info">
                            <strong className="username">{user.username}</strong>
                            <span className="user-details"> - Name: {user.Name} - Email: {user.email}</span>
                        </div>
                        <button onClick={() => sendFriendRequest(user.id)} className="add-friend-button">Add Friend</button>
                    </li>
                    ))}
                </ul>
            )}
            {results.length === 0 && !loading && <p className="no-results">No results found.</p>}
        </div>
    );
};

export default SearchComponent;
