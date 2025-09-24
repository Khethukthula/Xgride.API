import React, { useState } from 'react';


const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const tips = [
    'Water conservation techniques',
    'Avoid traffic during peak hours',
    'Recycling guidelines',
    'Public transport schedules',
    'Tourist attractions'
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setResults([]);
    } else {
      const filteredTips = tips.filter((tip) =>
        tip.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredTips);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for tips..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
