'use client'
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

  // Function to parse CSV content and limit to first 20 rows
  const parseCSV = (content) => {
    try {
      const rows = content.split('\n').map(row => row.split(','));  // Split into rows and columns
      const limitedRows = rows.slice(0, 21);  // Limit to the first 21 rows (1 header + 20 data rows)
      console.log('Parsed CSV data (first 20 rows):', limitedRows);  // Debugging: Check the parsed CSV data
      setCsvData(limitedRows);  // Store only the first 21 rows (including the header)
    } catch (error) {
      console.error('Error parsing CSV:', error);  // Handle parsing errors
    }
  };

  return (
    <div className="csv-upload">
      <input type="file" accept=".csv" onChange={handleFileUpload} />  {/* File input for CSV */}
      {csvData && (
        <p>title: {csvData[0]}</p>
      )}
    </div>
  );
}
