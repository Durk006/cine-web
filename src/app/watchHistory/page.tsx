'use client';
import QuickMovie from '../components/quickMovie';

import { useCsv } from '../context/CsvContext';

export default function OtherPage() {
  const { csvData } = useCsv();  // Access csvData from context

  return (
    <div>
      <h1>CSV Data on Another Page</h1>
      {csvData.length > 0 && csvData.map((row, index) => (
        <div key={index}>
          <QuickMovie key={index} row= {row} Date={row.Date}/>
        </div>
      ))}
    </div>
  );
}
