'use client';
import { useCsv } from '../context/CsvContext';

export default function OtherPage() {
  const { csvData } = useCsv();  // Access csvData from context

  for (let movie in csvData){
    console.log(movie.Title)
  }

  return (
    <div>
      <h1>CSV Data on Another Page</h1>
      {csvData.length > 0 && csvData.map((row, index) => (
        <div key={index}>
          <p>{row.Title} - {row.Date}</p>
        </div>
      ))}
    </div>
  );
}
