'use client'

import { useEffect, useState } from 'react';
import Papa from 'papaparse'; // CSV parsing library

export default function CsvDataComponent() {
    const [data, setData] = useState([]);

    

  return (
    <div>
      <h1>CSV Data</h1>
      <ul>
        {csvData.map((row, index) => (
          <li key={index}>
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
