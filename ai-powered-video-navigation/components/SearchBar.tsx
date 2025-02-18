// File: components/SearchBar.tsx
import { useState } from 'react';
import axios from 'axios';

interface SearchBarProps {
  videoId: string | string[] | undefined;
  onResults: (results: any[]) => void;
}

const SearchBar = ({ videoId, onResults }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/search/?query=${encodeURIComponent(query)}&video_id=${videoId}`
      );
      onResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search within the video..."
        className="p-2 border border-gray-300 rounded mr-2 w-2/3"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
