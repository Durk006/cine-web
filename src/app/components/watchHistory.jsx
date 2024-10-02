'use client';

export default function OtherPage(csvData) {
  const { csvData } = useCsv();  // Access csvData from context

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
