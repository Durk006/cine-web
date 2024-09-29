"use client"

import { useState } from 'react';

export default function CSVUpload() {
  const [csvData, setCsvData] = useState(null);  // State to store the parsed CSV data

  // Function to handle file upload and read its content
  const handleFileUpload = (event) => {
    const file = event.target.files[0];  // Get the selected file
    console.log('File selected:', file);  // Debugging: Check if the file is selected
    if (file) {
      const reader = new FileReader();  // Initialize the FileReader

      reader.onload = (e) => {
        const content = e.target.result;  // Get the content of the file as text
        console.log('File content:', content);  // Debugging: Check the file content
        parseCSV(content);  // Parse the CSV content
      };

      reader.onerror = () => {
        console.error('Error reading file');  // Handle error reading the file
      };

      reader.readAsText(file);  // Read the file as text
    }
  };

  // Function to parse CSV content
  const parseCSV = (content) => {
    try {
      const rows = content.split('\n').map(row => row.split(','));  // Split into rows and columns
      console.log('Parsed CSV data:', rows);  // Debugging: Check the parsed CSV data
      setCsvData(rows);  // Store parsed CSV data in state
    } catch (error) {
      console.error('Error parsing CSV:', error);  // Handle parsing errors
    }
  };

  return (
    <div className="csv-upload">
      <input type="file" accept=".csv" onChange={handleFileUpload} />  {/* File input for CSV */}
      {csvData && (
        <table>
          <thead>
            <tr>
              {csvData[0].map((header, index) => (
                <th key={index}>{header}</th>  // Render CSV headers
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex}>{col}</td>  // Render each row's data
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
