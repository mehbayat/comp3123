import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ShowCard from './components/ShowCard';
import SearchBar from './components/SearchBar';

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Friends');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'https://api.tvmaze.com/search/shows';

  const fetchShows = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query
        }
      });

      if (response.data.length === 0) {
        setError('No TV shows found. Please try another search.');
        setShows([]);
      } else {
        setShows(response.data);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch TV shows. Please try again.');
      setLoading(false);
      setShows([]);
    }
  };

  useEffect(() => {
    fetchShows(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query) => {
    if (query.trim()) {
      setSearchTerm(query);
      fetchShows(query);
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="app-title">TV Show Finder</h1>
        <p className="student-info">Student ID: 101533701 | COMP 3123 - Lab Test 2</p>

        <SearchBar onSearch={handleSearch} />

        {loading && <div className="loading">Searching for TV shows...</div>}

        {error && <div className="error-message">{error}</div>}

        {shows.length > 0 && !loading && (
          <div className="shows-grid">
            {shows.map((item, index) => (
              <ShowCard key={item.show.id || index} data={item.show} />
            ))}
          </div>
        )}

        {!shows.length && !loading && !error && (
          <div className="info-message">Search for your favorite TV shows!</div>
        )}
      </div>
    </div>
  );
}

export default App;
