'use client';
import { useCsv } from '../context/CsvContext';
import QuickMovie from '../components/quickMovie';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function CSVUpload() {
  const { csvData, setCsvData } = useCsv();  // Access csvData and setCsvData from context
  const router = useRouter();  // Initialize router

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        parseCSV(content);
        // Redirect the user to the home page after parsing the CSV file
        router.push('/');
      };
      reader.readAsText(file);
    }
  };

  const parseCSV = (content) => {
    const rows = content.split('\n').map(row => row.split(','));
    const headers = rows[0];
    const mappedRows = rows.slice(1).map(row => {
      let rowData = {};
      row.forEach((cell, index) => {
        rowData[headers[index]] = cell.replace(/"/g, '');
      });
      return rowData;
    });
    setCsvData(mappedRows.slice(0, 20));  // Save data to context
  };

  return (
    <div className="csv-upload">
      <h1>Please Enter Netflix Watch History</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      {csvData.length > 0 && csvData.map((row, index) => (
        <QuickMovie key={index} row={row} />
      ))}
    </div>
  );
}
