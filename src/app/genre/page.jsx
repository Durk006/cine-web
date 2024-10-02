'use client'
import { useCsv } from '../context/CsvContext';
import { useState, useEffect } from 'react';

export default function Genre() {
  const { csvData } = useCsv();
  const [topGenres, setTopGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get the current year
  const getCurrentYear = () => new Date().getFullYear();

  useEffect(() => {
    const currentYear = getCurrentYear();

    const fetchGenres = async () => {
      const genreCount = {};
      const apiKey = 'b0620182';  // Replace with your actual OMDB API key

      const filteredData = csvData.filter(movie => {
        const movieYear = new Date(movie.Date).getFullYear();
        return movieYear === currentYear;
      });

      console.log(filteredData)

      for (let movie of filteredData) {
        try {
          const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie.Title)}`);
          const data = await response.json();
          
          if (data.Genre) {
            
            const genres = data.Genre.split(',');  // Split the genres by comma
            genres.forEach(genre => {
              genre = genre.trim();  // Trim any extra spaces
              genreCount[genre] = (genreCount[genre] || 0) + 1;  // Count each genre
            });
          }
        } catch (error) {
          console.error(`Error fetching genre for ${movie.Title}:`, error);
        }
      }

      // Convert genreCount object to array and sort
      const sortedGenres = Object.entries(genreCount)
        .sort((a, b) => b[1] - a[1])  // Sort by count descending
        .slice(0, 10);  // Take top 10 genres

      setTopGenres(sortedGenres);  // Update state with top genres
      setLoading(false);  // Stop loading
    };

    fetchGenres();
  }, [csvData]);

  return (
    <div>
      <h1>Top Genres of {getCurrentYear()}</h1>
      {loading ? (
        <p>Loading genres...</p>
      ) : (
        topGenres.length > 0 ? (
          topGenres.map(([genre, count], index) => (
            <div key={index}>
              <p>{genre} - {count} movies</p>
            </div>
          ))
        ) : (
          <p>No genres found for the current year.</p>
        )
      )}
    </div>
  );
}
