// components/WatchHistory.js
'use client'
// pages/watchHistory.js
import { useEffect, useState } from 'react';

const WatchHistory = () => {
  const [csvText, setCsvText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCsv = async () => {
      try {
        const response = await fetch('../api/fetchCsv');
        if (!response.ok) {
          throw new Error('Failed to fetch CSV');
        }

        const data = await response.json();
        setCsvText(data.csvText);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCsv();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>CSV Content:</h1>
      <pre>{csvText}</pre>
    </div>
  );
};

export default WatchHistory;
