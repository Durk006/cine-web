'use client'
import { useState } from 'react';

import QuickMovie from '../components/quickMovie'

export default function CSVUpload() {
  const [csvData, setCsvData] = useState([]); 

  const handleFileUpload = (event) => {
    const file = event.target.files[0];  
    if (file) {
      const reader = new FileReader();  

      reader.onload = (e) => {
        const content = e.target.result;  
        parseCSV(content);  
      };

      reader.readAsText(file); 
    }
  };

  // Function to parse CSV content and map rows based on headers
  const parseCSV = (content) => {
    const rows = content.split('\n').map(row => row.split(','));

    const headers = rows[0];

    const mappedRows = rows.slice(1).map(row => {
      let rowData = {};
      row.forEach((cell, index) => {
        rowData[headers[index]] = cell;  // Assign each cell to its corresponding header
      });
      return rowData;
    });

    setCsvData(mappedRows.slice(0,21));  //only use the first 20
  };

  return (
    <div className="csv-upload">
      <input type="file" accept=".csv" onChange={handleFileUpload} />  {/* File input for CSV */}
      <h1>Watch History</h1>
      {/* Map over CSV data and pass each row to CSVRowComponent */}
      {csvData.length > 0 && csvData.map((row, index) => (
        <QuickMovie key={index} row={row} />
      ))}
    </div>
  );
}
