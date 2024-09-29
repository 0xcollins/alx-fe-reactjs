import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input 
  type="text" 
  placeholder="Location" 
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>
<input 
  type="number" 
  placeholder="Min Repos" 
  value={repos}
  onChange={(e) => setRepos(e.target.value)}
/>
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <p>{userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
