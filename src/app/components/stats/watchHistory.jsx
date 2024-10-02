'use client';

export default function watchHistory(CsvData) {
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
