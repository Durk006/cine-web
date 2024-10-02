// pages/OtherPage.js
'use client';
import { useCsv } from '../context/CsvContext';

export default function OtherPage() {
  const { csvData } = useCsv();  // Access csvData here

  return (
    <div>
      <h1>Movies List</h1>
      {csvData.map((row, index) => (
        <div key={index}>
          <p>{row.Title} - {row.Date}</p>
        </div>
      ))}
    </div>
  );
}
